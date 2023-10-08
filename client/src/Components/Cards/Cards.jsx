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
      ))}
    </div>
  );
};

export default Cards;