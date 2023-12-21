import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ currentPage, driversPerPage, drivers, paginate }) => {
  const totalPages = Math.ceil(drivers.length / driversPerPage);

  const pageRange = 5;
  let startPage, endPage;

  if (totalPages <= pageRange) {
    startPage = 1;
    endPage = totalPages;
  } else {
    startPage = Math.floor((currentPage - 1) / pageRange) * pageRange + 1;
    endPage = Math.min(totalPages, startPage + pageRange - 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav className="pagination-container">
      <div className="pagination-buttons">
        <button
          onClick={() => paginate(currentPage - 10)}
          disabled={currentPage <= 10}
        >
          -10
        </button>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => paginate(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <button
          onClick={() => paginate(currentPage + 10)}
          disabled={currentPage + 10 > totalPages}
        >
          +10
        </button>
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  driversPerPage: PropTypes.number.isRequired,
  drivers: PropTypes.array.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;



