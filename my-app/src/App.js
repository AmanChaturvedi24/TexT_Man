import './App.css';
import React, { useState } from 'react';

import Textbox from './components/Textbox';
import Navbar from './components/Navbar';
function App() {
  const [mood, setmood] = useState("light");
  const toggleHandle=()=>{
    if(mood==="light")
    setmood("dark")
    else
    setmood("light")
  }
  return (
    <>
   <Navbar title='TexT_Man' mode={mood} toggleHandle={toggleHandle}/>
   <div className="container my-3">
    <Textbox heading="Enter the text to analyze below"/>
    {/* <About/> */}
   </div>
    </>
  );
}

export default App;
