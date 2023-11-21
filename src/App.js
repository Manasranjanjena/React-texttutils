import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alerts from './components/Alerts';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Outlet
// } from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
    }, 1500);
    }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode has been enabled","success")
     }else{
      setMode('light'); 
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled","success")
    } 
  }
  return (
    <>
       {/* <BrowserRouter> */}
       <Navbar title="Texttutils" mode={mode} toggleMode={toggleMode}/>
       <Alerts alert={alert}/>
       {/* <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              path="/"> */}
                <Textform
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              {/* }
            />
          </Routes>
        </div>
      </BrowserRouter>
     */}
    </>
  );
}
export default App;
