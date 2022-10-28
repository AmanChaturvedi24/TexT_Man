// import logo from './logo.svg';
import './App.css';
import Textbox from './components/Textbox';
import Navbar from './components/Navbar';
// import Textbox from './components/Textbox';
function App() {
  return (
    <>
   <Navbar title='TexT_Man'/>
   <div className="container my-3">
    <Textbox heading="Enter the text to analyze below"/>
    {/* <About/> */}
   </div>
    </>
  );
}

export default App;
