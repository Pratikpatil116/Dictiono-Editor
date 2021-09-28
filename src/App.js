import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Dictionary from './components/Dictionary';
import About from './components/About';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 1500);
  }
  const switchMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#154360';
      showAlert("Dark mode has been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");

    }
  }
  return (
    <>
      <Router>
        <Navbar title="Dictino+Editor" mode={mode} switchMode={switchMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/dictionary">
              <Dictionary headingg="Dictionary" mode={mode} />
              
            </Route>
            <Route exact path="/about">
              <About headingg="About" mode={mode} />
              
            </Route>
            
            

            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter Your Text to Edit" mode={mode} />
            </Route>
            
          </Switch>


        </div>

      </Router>
    </>
  );
}

export default App;
