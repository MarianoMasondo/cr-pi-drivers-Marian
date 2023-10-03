import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="nav-container">
   
      <div className="title-container">
        <h1>Drivers App</h1>
      </div>
    
    <div className="button-container">
      <Link to={"/home"}>
        <button className="nav-button">Home</button>
      </Link>    
      
      <Link to={"/form"}>
        <button className="nav-button">Create</button>
      </Link>
      
        <Link to={"/about"}>
            <button className="nav-button">About</button>
        </Link>  

        <Link to={"/"}>
            <button className="nav-button">Exit</button>
        </Link>        
    </div>

    </div>

  )
}

export default Navbar