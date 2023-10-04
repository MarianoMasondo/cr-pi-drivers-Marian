// Home.jsx
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Components/Cards/Cards";
import "./Home.css"
import { useEffect, useState } from "react";
import { getDrivers } from "../../Redux/Actions/Actions";
import Searchbar from "../../Components/Searchbar/Searchbar";
import OrderDrivers from "../../Components/Order/OrderDrivers";
import Pagination from "../../Components/Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();

  const allDrivers = useSelector((state) => state.drivers);
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 9;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch])

  console.log("currentPage:", currentPage);
  console.log("driversPerPage:", driversPerPage);
  console.log("allDrivers length:", allDrivers.length);

  // Calcular el índice del último conductor y el índice del primer conductor para la página actual
  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;

  // Obtener los conductores que se mostrarán en la página actual
  const currentDrivers = allDrivers.slice(indexOfFirstDriver, indexOfLastDriver);

  return (
    <div className="home-container">
      <div>
        <OrderDrivers />
      </div>
      <div>
        <Searchbar />
      </div>
      <div>
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
              teams={driver.teams}
            />
          )
        })}
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
  )
}

export default Home;
