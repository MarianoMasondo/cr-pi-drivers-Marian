// import PropTypes from "prop-types";
// import "./Pagination.css";

// const Pagination = ({
//     currentPage,
//     driversPerPage,
//     allDrivers,
//     paginate,
//   }) => {
//     const totalPages = Math.ceil(allDrivers.length / driversPerPage);
  
//     const pages = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pages.push(i);
//     }
  
//     return (
//       <nav className="pagination-container">
//         <div className="pagination-buttons">
//           {pages.map((page) => (
//             <button
//               key={page}
//               onClick={() => paginate(page)}
//               className={currentPage === page ? "active" : ""}
//             >
//               {page}
//             </button>
//           ))}
//         </div>
//       </nav>
//     );
//   };

// Pagination.propTypes = {
//   currentPage: PropTypes.number.isRequired,
//   driversPerPage: PropTypes.number.isRequired,
//   allDrivers: PropTypes.array.isRequired, // Change the prop type to array
//   paginate: PropTypes.func.isRequired,
// };

// export default Pagination;





