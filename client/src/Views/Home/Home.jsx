import { useDispatch } from "react-redux";
import Cards from "../../Components/Cards/Cards";
import "./Home.css"
import { useEffect } from "react";
import { getDrivers } from "../../Redux/Actions/Actions";
import Searchbar from "../../Components/Searchbar/Searchbar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch])

  return (
    <div className="home-container">
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
