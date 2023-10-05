import { Link } from "react-router-dom";
import "./Form.css"

const Form = () => {
  return (
    <Link to="/home">
        <button className="back-home">Home</button>
        <div className="form-container"></div>
      </Link>
  )
}

export default Form;