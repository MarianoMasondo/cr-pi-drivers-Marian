// // Pagination.jsx
// import PropTypes from "prop-types";
// import "./Pagination.css";

// const Pagination = ({ currentPage, driversPerPage, allDrivers, paginate }) => {
//   const totalPages = Math.ceil(allDrivers / driversPerPage);

//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav className="pagination-container">
//       <ul className="pagination-buttons">
//         {pageNumbers.map((number) => (
//           <li key={number} className="pagination-item">
//             <button
//               className={`pagination-button ${
//                 currentPage === number ? "active" : ""
//               }`}
//               onClick={() => paginate(number)}
//             >
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// Pagination.propTypes = {
//   currentPage: PropTypes.number.isRequired,
//   driversPerPage: PropTypes.number.isRequired,
//   allDrivers: PropTypes.number.isRequired,
//   paginate: PropTypes.func.isRequired,
// };

// export default Pagination;




