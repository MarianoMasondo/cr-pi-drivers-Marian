import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Components/Cards/Cards";
import "./Home.css";
import { getDrivers } from "../../Redux/Actions/Actions";
import Searchbar from "../../Components/Searchbar/Searchbar";
import OrderDrivers from "../../Components/Order/OrderDrivers";
import Pagination from "../../Components/Pagination/Pagination";
import Filter from "../../Components/Filter/Filter";

const Home = () => {
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.drivers);
  const [currentPage, setCurrentPage] = useState(1);
  const [driversPerPage] = useState(9)

  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = allDrivers.slice(indexOfFirstDriver, indexOfLastDriver);

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
        <Searchbar />
      <Filter />
      </div>
      <div>
      {currentDrivers?.map((driver) => (
  <Cards
    key={driver.id}
    id={driver.id}
    name={driver.name}
    lastname={driver.lastname}
    nationality={driver.nationality}
    image={driver.image}
    description={driver.description}
    birthdate={driver.birthdate}
    teams={driver.teams}
    currentDrivers={currentDrivers} 
  />
))}

      </div>
      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          driversPerPage={driversPerPage}
          allDrivers={allDrivers}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Home;

