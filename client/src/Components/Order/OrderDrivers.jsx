import { useEffect, useState } from "react";
import "./OrderDrivers.css";
import {
  getDrivers,
  orderByDob,
  orderDrivers,
} from "../../Redux/Actions/Actions";
import { useDispatch } from "react-redux";

const OrderDrivers = () => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  const handleOrder = (e) => {
    e.preventDefault();

    if (e.target.value === "default") {
      dispatch(getDrivers());
    } else {
      dispatch(orderDrivers(e.target.value));
    }

    setAux(!aux);
  };

  const handleBirthday = (e) => {
    e.preventDefault();

    if (e.target.value === "default") {
      dispatch(getDrivers());
    } else if (e.target.value === "asc") {
      dispatch(orderByDob("asc"));
    } else if (e.target.value === "desc") {
      dispatch(orderByDob("desc"));
    }

    setAux(!aux);
  };

  return (
    <div className="order-container">
      <div className="control-group">
        <label className="control-label">Alphabetical</label>

        <select className="control-select" onChange={handleOrder} defaultValue="default">
          <option value="default">Order A-Z / Z-A</option>
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>
      </div>

      <div className="control-group">
        <label className="control-label">Birthday</label>

        <select
          className="control-select"
          onChange={handleBirthday}
          defaultValue="default"
        >
          <option value="default">Order by birthday</option>
          <option value="asc">Youngest first</option>
          <option value="desc">Oldest first</option>
        </select>
      </div>
    </div>
  );
};

export default OrderDrivers;