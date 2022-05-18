import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
import Alert from './Components/Alert';


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
     }, 1500);
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
    <Navbar title="TextUtils" homemenu="Home" aboutmenu="About" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <TextForm heading="Enter text to convert case" mode={mode} showAlert={showAlert}></TextForm>
    {/* <Navbar/>*/}
     {/*<About/>*/}
    </>
  )
}

export default App;
