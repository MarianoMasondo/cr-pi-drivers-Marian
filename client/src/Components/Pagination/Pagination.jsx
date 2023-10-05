import "./Pagination.css";
import PropTypes from "prop-types";

const Pagination = ({
  currentPage,
  driversPerPage,
  allDrivers,
  paginate,
}) => {
  const pages = [];
  const totalPages = Math.ceil(allDrivers.length / driversPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="pagination-container">
      <div className="pagination-buttons">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => paginate(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  driversPerPage: PropTypes.number.isRequired,
  allDrivers: PropTypes.array.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;

