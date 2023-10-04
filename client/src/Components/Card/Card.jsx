import PropTypes from "prop-types"; 
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, lastname, teams, image }) => {
  return (
    <Link to={`/detail/${id}`}>
    <div className="card">
  <div ><img src={image} alt={name} className="image"/></div>
  <div className="card-info">
  <span>{name} {lastname}</span>
  <div>
    <label>Teams:</label>
    <ul>
      {teams.map((team, index) => (
        <li key={index}>{team}</li>
      ))}
    </ul>
  </div>
</div>
</div>
  </Link>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  teams: PropTypes.array.isRequired, 
};


export default Card;

