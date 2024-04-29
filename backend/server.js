const express = require("express");
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "your_database",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL");
});

// Middleware for handling multipart/form-data
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
}).single("image");

// Express body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route for handling form submission
app.post("/api/new-reg", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      const { name, bio, email, password } = req.body;
      const image = req.file ? req.file.filename : null;

      const sql = "INSERT INTO users (name, bio, email, password, image) VALUES (?, ?, ?, ?, ?)";
      db.query(sql, [name, bio, email, password, image], (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: "Failed to add user to database" });
        } else {
          res.json({ message: "User added successfully" });
        }
      });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});