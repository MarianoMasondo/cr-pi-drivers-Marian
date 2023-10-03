import './App.css'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import Form from './Views/Form/Form';
import Detail from './Views/Detail/Detail';
import Navbar from './Components/Navbar/Navbar';

function App() {  
  return (
    <BrowserRouter>
      <div className='App'>
        {location.pathname !==  "/" && <Navbar />}
        <Routes>
          <Route exact path ={"/"} element={<Landing />} />
          <Route path ={"/home"} element={<Home />} />
          <Route path ={"/detail"} element={<Detail />} />
          <Route path ={"/form"} element={<Form />} />          
        </Routes>
      </ div>    
    </BrowserRouter>
  )
}

export default App;
