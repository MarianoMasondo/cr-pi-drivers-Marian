import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Components/Cards/Cards";
import "./Home.css";
import { getDrivers } from "../../Redux/Actions/Actions";
import Searchbar from "../../Components/Searchbar/Searchbar";
import OrderDrivers from "../../Components/Order/OrderDrivers";
import Filter from "../../Components/Filter/Filter";
import { useEffect, useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  // let driversPerPage= 9;

  const drivers = useSelector((state) => state.drivers);
  const [currentPage, setCurrentPage] = useState(1);
  const [driversPerPage] = useState(9);
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
    console.log("Fetching drivers...")
    dispatch(getDrivers());
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="filter-container">
        <OrderDrivers className="order-drivers" />
        <Searchbar className="searchbar" />
        <Filter />
      </div>
      <div
        className={`${"pagination-containerCards"} ${"card-Container"}`}
      >
        {currentDrivers.map((driver) => {
          return (
            <Cards
            key={driver.id}
            id={String(driver.id)}
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

export default Home;








