import './App.css'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import Form from './Views/Form/Form';
import Detail from './Views/Detail/Detail';
import Navbar from './Components/Navbar/Navbar';
import About from './Views/About/About';

function App() {  
  return (
    <BrowserRouter>
      <div className='App'>
        {location.pathname !==  "/" && <Navbar />}
        <Routes>
          <Route exact path ={"/"} element={<Landing />} />
          <Route path ={"/home"} element={<Home />} />
          <Route path ={"/detail/:id"} element={<Detail />} />
          <Route path ={"/form"} element={<Form />} />          
          <Route path ={"/about"} element={<About />} />          
        </Routes>
      </ div>    
    </BrowserRouter>
  )
}

export default App;
