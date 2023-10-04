import { useDispatch } from "react-redux";
import Cards from "../../Components/Cards/Cards";
import "./Home.css"
import { useEffect } from "react";
import { getDrivers } from "../../Redux/Actions/Actions";
import Searchbar from "../../Components/Searchbar/Searchbar";
import OrderDrivers from "../../Components/Order/OrderDrivers";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch])

  return (
    <div className="home-container">
      <div>
        <OrderDrivers />
      </div>
      <div>
        <Searchbar />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  )
}

export default Home;
