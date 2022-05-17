import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
//import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" homemenu="Home" aboutmenu="About"></Navbar>
    {/* <TextForm heading="Enter text to conver case"></TextForm>*/}
    {/* <Navbar/>*/}
    <About/>
    </>
  )
}

export default App;
