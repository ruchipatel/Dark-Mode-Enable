import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#002141';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }


  return (
    <>
    <Navbar title="TextUtils" homemenu="Home" aboutmenu="About" mode={mode} toggleMode={toggleMode}></Navbar>
    <TextForm heading="Enter text to convert case" mode={mode}></TextForm>
    {/* <Navbar/>*/}
     {/*<About/>*/}
    </>
  )
}

export default App;
