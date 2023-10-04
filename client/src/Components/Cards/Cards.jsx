import { useSelector } from "react-redux";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  const drivers = useSelector((state) => state.drivers);
  return (
    <div className="cards-container">
      {drivers.map((driver) => (
        <Card
          key={driver.id}
          id={parseInt(driver.id)} // Convert id to number
          name={driver.name}
          lastname={driver.lastname}
          nationality={driver.nationality}
          image={driver.image}
          description={driver.description}
          birthdate={driver.birthdate}
          teams={Array.isArray(driver.teams) ? driver.teams : []} // Ensure teams is an array or an empty array
        />
      ))}
    </div>
  );
}

export default Cards;


