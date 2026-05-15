import PropTypes from "prop-types";
import "./Card.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getDrivers } from "../../Redux/Actions/Actions";

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
      dispatch(getDrivers());
    } catch (error) {
      alert(error.response?.data?.error || "Error deleting driver");
    }
  };

  const formattedTeams = Array.isArray(teams)
    ? teams.join(", ")
    : teams || "No teams available";

  return (
    <article className="driver-card">
      <Link to={`/detail/${id}`} className="driver-card__link">
        <div className="driver-card__image-container">
          <img
            src={image || "/default-driver.jpg"}
            alt={`${name} ${lastname}`}
            className="driver-card__image"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/default-driver.jpg";
            }}
          />
        </div>

        <div className="driver-card__content">
          <p className="driver-card__tag">Driver</p>

          <h3 className="driver-card__name">
            {name} {lastname}
          </h3>

          <div className="driver-card__teams">
            <span>Teams</span>
            <p>{formattedTeams}</p>
          </div>
        </div>
      </Link>

      {createDb && (
        <button
          type="button"
          className="driver-card__delete"
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
    </article>
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