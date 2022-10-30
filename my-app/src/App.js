import "./App.css";
import React, { useState } from "react";

import Textbox from "./components/Textbox";
import Navbar from "./components/Navbar";
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
    <>
      <Navbar title="TexT_Man" mode={mood} toggleHandle={toggleHandle} />
      <div className="container my-3">
        <Textbox heading="Enter the text to analyze below" mode={mood} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
