import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cards from "../../Components/Cards/Cards";
import "./Home.css";
import { getDrivers, page } from "../../Redux/Actions/Actions";
import Searchbar from "../../Components/Searchbar/Searchbar";
import OrderDrivers from "../../Components/Order/OrderDrivers";
import Filter from "../../Components/Filter/Filter";

const Home = () => {

  const dispatch = useDispatch();


  const pagination = (e) => {
    dispatch(page(e.target.name));
  };

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="filter-container">
        <OrderDrivers className="order-drivers" />
        <Searchbar className="searchbar" />
        <Filter />
      </div>
      <div>
        <Cards />
      </div>
      <div className="pagination-container">
        <button className="pagButtons" name="prev" onClick={pagination}>
          prev
        </button>
        <button className="pagButtons" name="next" onClick={pagination}>
          next
        </button>
      </div>
    </div>
  );
};

export default Home;







