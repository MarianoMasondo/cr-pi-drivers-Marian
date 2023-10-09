import { useEffect, useState } from "react";
import "./Home.css"
import { useDispatch, useSelector } from "react-redux";

import TypeFilter from "../../components/filter/Filter";
import Pagination from "../../Components/Pagination/Pagination";
import { getDrivers } from "../../Redux/Actions/Actions";
import OrderDrivers from "../../Components/Order/OrderDrivers";
import Cards from "../../Components/Cards/Cards";

const HomePage = () => {
  const dispatch = useDispatch();

  const drivers = useSelector((state) => state.drivers);
  console.log(drivers)
  const [currentPage, setCurrentPage] = useState(1);
const [driversPerPage] = useState(9); 
console.log(driversPerPage)

const indexOfLastDriver = currentPage * driversPerPage;
const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
const currentDrivers = drivers.slice(
  indexOfFirstDriver,
  indexOfLastDriver
);

const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
};


  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="filter-container">
        <OrderDrivers />
        <TypeFilter />
      </div>
      <div
        className={`${"pagination-container-cards"} ${"card-Container"}`}
      >
        {currentDrivers?.map((driver) => {
          return (
            <Cards
            key={driver.id}
            id={driver.id} 
            name={driver.name}
            lastname={driver.lastname}
            nationality={driver.nationality}
            image={driver.image}
            description={driver.description}
            birthdate={driver.birthdate}
            teams={String(driver.teams)} 
            createDb={driver.createDb}
            />
          );
        })}
      </div>
      <div className="pagination-container">
      <Pagination
  currentPage={currentPage}
  driversPerPage={driversPerPage}
  drivers={drivers} 
  paginate={paginate}
/>

      </div>
    </div>
  );
};

export default HomePage;








