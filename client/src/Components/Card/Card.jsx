import PropTypes from "prop-types";
import "./Card.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getDrivers } from "../../Redux/Actions/Actions";

const Card = ({ id, name, lastname, teams, image, createDb }) => {
  const dispatch = useDispatch();

  const handleDelete = async (event) => {
    event.preventDefault();
    event.stopPropagation();

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
      {createDb && (
        <button className="driver-card-delete" onClick={handleDelete}>
          ×
        </button>
      )}

      <Link to={`/detail/${id}`} className="driver-card-link">
        <img
          src={image}
          alt={`${name} ${lastname}`}
          className="driver-card-image"
        />

        <div className="driver-card-info">
          <h3 className="driver-card-name">
            {name} {lastname}
          </h3>

          <p className="driver-card-teams">{formattedTeams}</p>
        </div>
      </Link>
    </article>
  );
};

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  teams: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  image: PropTypes.string.isRequired,
  createDb: PropTypes.bool,
};

export default Card;