import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Matches from "./components/Matches";

function App() {
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
