import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Matches from "./components/Matches";

function App() {
  const db = [
    {
      name: "Cleopatra kunnamkulam",
      url: "./img/adithya.jpg",
    },
    {
      name: "Erlich Bachman",
      url: "./img/erlich.jpg",
    },
    {
      name: "Monica Hall",
      url: "./img/monica.jpg",
    },
    {
      name: "Jared Dunn",
      url: "./img/jared.jpg",
    },
    {
      name: "Dinesh Chugtai",
      url: "./img/dinesh.jpg",
    },
  ];
  const [step, setStep] = useState(1);
  const characters = db;
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="">
          <Matches />
        </div>
      </div>
    </div>
  );
}

export default App;
