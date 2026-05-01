import PropTypes from "prop-types";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, lastname, teams, image }) => {
  return (
    <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
      <div className="card">
        <div>
          <img
            src={image || "/default-driver.jpg"}
            alt={`${name} ${lastname}`}
            className="image"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/default-driver.jpg";
            }}
          />
        </div>

        <div className="card-info">
          <span>
            {name} {lastname}
          </span>
          <div>
            <label>Teams:</label>
            <p>{teams}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  teams: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  image: PropTypes.string,
};

export default Card;
