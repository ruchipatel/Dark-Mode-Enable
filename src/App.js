import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
import Alert from './Components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  
  const showAlert = (message,type) =>
  {
     setAlert({
       msg:message,
       type:type
     })

     setTimeout(() => {
      setAlert(null)
     }, 2000);
  }

  const toggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#002141';
      showAlert("Dark mode enable","Success")
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enable","Success")
    }
  }


  return (
    <>
   <BrowserRouter>
    <Navbar title="TextUtils" homemenu="Home" aboutmenu="About" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
  
    {/* <Navbar/>*/}
     {/*<About/>*/}
     <Routes>
            <Route path="/about" element={<About  mode={mode}/>} >
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
