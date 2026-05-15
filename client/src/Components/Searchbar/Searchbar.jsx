import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Searchbar.css";
import { searchDriver } from "../../Redux/Actions/Actions";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setName(searchValue);
    dispatch(searchDriver(searchValue));
  };

  return (
    <div className="search-container">
      <span className="search-icon">🔎</span>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Search driver..."
        className="search-input"
      />
    </div>
  );
};

export default Searchbar;