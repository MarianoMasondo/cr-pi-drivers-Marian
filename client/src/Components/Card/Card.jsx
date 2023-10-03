import "./Card.css";

const Card = ({ name, teams, image }) => {
  return (
    <div className="card-container">
      <div>
        <h1>{name}</h1>
        <img src={image} alt={name} className="card-image" />
        <h3>{teams}</h3>
      </div>
    </div>
  );
};

export default Card;
