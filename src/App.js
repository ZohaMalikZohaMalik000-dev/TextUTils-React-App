import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';  
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      document.body.style.backgroundColor = "#194571ff";
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
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
        <div className="container my-3">
            {/* <Routes>  */}
            {/* ✅ Default route (TextUtils link and refresh) */}
            {/* <Route Exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode} />
            {/* ✅ About page */}
            {/* <Route Exact path="/about" element={<About />} /> */}

            {/* ✅ Agar Home component nahi hai, to sirf text dikha do */}
            {/* <Route Exact path="/home" element={<h2>Welcome to Home Page</h2>} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
