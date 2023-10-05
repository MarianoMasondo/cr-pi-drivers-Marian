import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import { allTeams, filterApiDb, filterTeams, getDrivers } from "../../Redux/Actions/Actions";

const Filter = () => {
    const [selectedTeam, setSelectedTeam] = useState("");
    const teams = useSelector((state) => state.teams);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allTeams());
    }, [dispatch]);

    const handleFilter = (e) => {
        const selectedValue = e.target.value;
        console.log("Selected Team:", selectedValue);
        setSelectedTeam(selectedValue);
        if(e.target.value === "default"){
            dispatch(getDrivers());
        } else{
            dispatch(filterTeams(selectedValue))
        }
    }

    const handleSourceFilter = (e) => {
        setSelectedTeam(e.target.value);
        dispatch(filterApiDb(e.target.value))
    }
  return (
    <div className="filter-container">
        <div>
            <select onChange={(e) => handleFilter(e)} value={selectedTeam}>
                <option value="default">Filter by Team</option>
                {teams?.map((team) => ( 
                <option key={team.id}value={team.name}>
                {team.name}
                </option>
                ))}
            </select>
        </div>

        <div className="filter-imput">
            <span>Filter by Source</span>
            <label>
                <input
                type="radio"
                value="all"
                checked={selectedTeam === "all"}
                onChange={handleSourceFilter}
                />
                All
            </label>
            <label>
                <input
                type="radio"
                value="api"
                checked={selectedTeam === "api"}
                onChange={handleSourceFilter}
                />
                Api
            </label>
                <label>
                    <input
                    type="radio"
                    value="database"
                    checked={selectedTeam === "database"}
                    onChange={handleSourceFilter}
                    />
                    Database
                </label>
        </div>
    </div>
  )
}

export default Filter;

