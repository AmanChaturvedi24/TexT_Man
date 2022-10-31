import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Textbox from "./components/Textbox";
import Navbar from "./components/Navbar";
import About from "./components/About";


function App() {
  const [mood, setmood] = useState("light");

  const toggleHandle = () => {
    if (mood === "light") {
      document.body.style.backgroundColor = "#0f172a";
      setmood("dark");
    } else {
      document.body.style.backgroundColor = "#cbd5e1";

      setmood("light");
    }
  };
  return (
    <Router>
      <Navbar title="TexT_Man" mode={mood} toggleHandle={toggleHandle} />
        <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mood}/>}/>
         
        <Route index path="/" element={
          <Textbox heading="Enter the text to analyze below" mode={mood} />
        }/>
      </Routes>
        </div>

    </Router>
  );
}

export default App;
