import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ currentDrivers }) => {
  return (
    <div className="cards-container">
      {currentDrivers.map((driver) => (
        <Card
          key={driver.id}
          id={parseInt(driver.id)} 
          name={driver.name}
          lastname={driver.lastname}
          nationality={driver.nationality}
          image={driver.image}
          description={driver.description}
          birthdate={driver.birthdate}
          teams={String(driver.teams)} 
        />
      ))}
    </div>
  );
}
Cards.propTypes = {
  currentDrivers: PropTypes.array.isRequired, } 
export default Cards;

