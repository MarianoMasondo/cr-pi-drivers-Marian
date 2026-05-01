import PropTypes from "prop-types";
import "./Card.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { allDrivers } from "../../Redux/Actions/Actions";

const Card = ({ id, name, lastname, teams, image, createDb }) => {
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${name} ${lastname}?`
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`/drivers/${id}`);
      alert("Driver deleted successfully");
      dispatch(allDrivers());
    } catch (error) {
      alert(error.response?.data?.error || "Error deleting driver");
    }
  };

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
            <p>{Array.isArray(teams) ? teams.join(", ") : teams}</p>
          </div>

          {createDb && (
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
          )}
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
  createDb: PropTypes.bool,
};

export default Card;
