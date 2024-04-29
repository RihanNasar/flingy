-- Create the users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    bio TEXT,
    image VARCHAR(255)
);

-- Insert sample users
INSERT INTO users (name, bio, image) VALUES
('Cleopatra kunnamkulam', 'Hi, I''m Cleopatra. I love exploring new places and trying out different cuisines. Let''s go on an adventure together!', './img/adithya.jpg'),
('Erlich Bachman', 'Hey, I''m Erlich. I''m passionate about technology and startups. Looking for someone who shares my interests and can challenge me intellectually.', './img/erlich.jpg'),
('Monica Hall', 'Hi there, I''m Monica. I''m a fitness enthusiast and enjoy outdoor activities like hiking and cycling. Let''s stay active together!', './img/monica.jpg'),
('Jared Dunn', 'Hello, I''m Jared. I''m a big fan of data and analytics. Looking for someone who appreciates insights and enjoys deep conversations.', './img/jared.jpg'),
('Dinesh Chugtai', 'Hey, I''m Dinesh. I''m a software engineer by day and a stand-up comedian by night. Let me make you laugh!', './img/dinesh.jpg');
