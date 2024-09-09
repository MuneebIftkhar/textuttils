import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';

import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light'); 
  const [alert,setAlert]=useState(null); 
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
     setTimeout(() => {
       setAlert(null);
     }, 2000);

  }



  const togglemode =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';  
      showAlert("Dark mode has been enables", "success")    
    }else{
      setmode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enables", "success")
      // setInterval(() => {
      //   document.title='Textuttils is amazing'
      // }, 1500);
      // setInterval(()=>{
      //   document.title='Install Textuttils Now'
      // },2000)
    }
  }
  return (
    <>
     <Router>
      <Navbar title="Textuttils" mode={mode} togglemode={togglemode} About={"About Us"}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
  <Route exact path="/about" element={<About />} /> {/* The path for /about */}
  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> {/* The path for home */}
</Routes>

      </div>
      </Router>
    </>
  );
}

export default App;
