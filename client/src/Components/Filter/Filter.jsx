import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import {
  allTeams,
  filterApiDb,
  filterTeams,
  getDrivers,
} from "../../Redux/Actions/Actions";

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedSource, setSelectedSource] = useState("all");
  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(allTeams());
  }, [dispatch]);

  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    setSelectedTeam(selectedValue);

    if (selectedValue === "all") {
      dispatch(getDrivers());
    } else {
      dispatch(filterTeams(selectedValue));
    }
  };

  const handleSourceFilter = (e) => {
    const selectedValue = e.target.value;
    setSelectedSource(selectedValue);

    if (selectedValue === "all") {
      dispatch(filterApiDb("all"));
    } else if (selectedValue === "api") {
      dispatch(filterApiDb("api"));
    } else if (selectedValue === "database") {
      dispatch(filterApiDb("database"));
    }
  };

  return (
    <div className="filter-wrapper">
      <div className="control-group">
        <label className="control-label">Team</label>

        <select
          className="control-select"
          onChange={handleFilter}
          value={selectedTeam}
        >
          <option value="">Filter by team</option>
          <option value="all">All teams</option>

          {teams?.map((team) => (
            <option key={team.id || team.name} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label className="control-label">Source</label>

        <select
          className="control-select"
          onChange={handleSourceFilter}
          value={selectedSource}
        >
          <option value="all">All drivers</option>
          <option value="database">Database</option>
          <option value="api">Api</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;