import { Link } from "react-router-dom";
import "./Landing.css"

const Landing = () => {
  return (
    <div className="landing-container">
        <div>
            <h1 className="landing-h1">Welcome to Drivers App</h1>
        </div>
        <div>
            <Link to={"/home"}>
                <button className="landing-button" type="submit">Enter</button>
            </Link>
        </div>
        
    </div>
  )
}

export default Landing;