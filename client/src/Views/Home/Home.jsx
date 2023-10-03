import { useDispatch } from "react-redux";
import Cards from "../../Components/Cards/Cards";
import "./Home.css"
import { useEffect } from "react";
import { getDrivers } from "../../Redux/Actions/Actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch])

  return (
    <div className="home-container">
        <Cards />
    </div>
  )
}

export default Home;
