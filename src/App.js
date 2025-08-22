
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';  
// import { HashRouter as Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#092641ff";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (  
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
        <div className="container my-3">
          <Routes> 
            {/* ✅ Default + Home → TextForm */}
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Remove Spaces, Char Counter" mode={Mode} />} />
            <Route path="/home" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Remove Spaces, Char Counter" mode={Mode} />} />
            {/* ✅ Agar Home component no hai, to only text watch do */}
            {/* <Route Exact path="/home" element={<h2>Welcome to Home Page</h2>} /> */}
            
            {/* ✅ About page */}
            <Route path="/about" element={<About mode={Mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
