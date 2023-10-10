import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Components/Cards/Cards";
import "./Home.css";
import { getDrivers, paginateDrivers } from "../../Redux/Actions/Actions";
import Searchbar from "../../Components/Searchbar/Searchbar";
import OrderDrivers from "../../Components/Order/OrderDrivers";
import Filter from "../../Components/Filter/Filter";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [driversPerPage] = useState(9);
  // const indexOfLastDriver = currentPage * driversPerPage;
  // const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  // const currentDrivers = drivers.slice(
  //   indexOfFirstDriver,
  //   indexOfLastDriver
  // );
  
  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);
  
  const paginate = (e) => {
  dispatch(paginateDrivers(e.target.name))
};
  return (
    <div className="home-container">
      <div className="filter-container">
        <OrderDrivers className="order-drivers" />
        <Searchbar className="searchbar" />
        <Filter />
      </div>
        <div>
          <button name="prev" onClick={paginate}>Prev</button>
          <button name="next" onClick={paginate}>Next</button>
        </div>
        <Cards drivers={drivers} />    
    </div>
    
  );
};

export default Home;








