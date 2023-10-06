// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./Filter.css";
// import { allTeams, filterApiDb, filterTeams, getDrivers } from "../../Redux/Actions/Actions";

// const Filter = () => {
//     const [selectedTeam, setSelectedTeam] = useState("");
//     const teams = useSelector((state) => state.teams);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(allTeams());
//     }, [dispatch]);

//     const handleFilter = (e) => {
//         const selectedValue = e.target.value;
//         console.log("Selected Team:", selectedValue);
//         setSelectedTeam(selectedValue);
//         if(e.target.value === "default"){
//             dispatch(getDrivers());
//         } else{
//             dispatch(filterTeams(selectedValue))
//         }
//     }

//     const handleSourceFilter = (e) => {
//         const selectedValue = e.target.value;
//         setSelectedTeam(selectedValue);
//         if (selectedValue === "database") {
//             dispatch(filterApiDb("database")); // Pasa la opción "database" al reducer
//         } else {
//             dispatch(filterApiDb("api")); // Pasa la opción "api" al reducer (o cualquier otra opción según tu lógica)
         
//         }
//     }
    
//   return (
//     <div className="filter-container">
//         <div>
//             <select onChange={(e) => handleFilter(e)} value={selectedTeam}>
//                 <option value="default">Filter by Team</option>
//                 {teams?.map((team) => ( 
//                 <option key={team.id}value={team.name}>
//                 {team.name}
//                 </option>
//                 ))}
//             </select>
//         </div>

//         <div className="filter-imput">
//             <span>Filter by Source</span>
//             <label>
//                 <input
//                 type="radio"
//                 value="all"
//                 checked={selectedTeam === "all"}
//                 onChange={handleSourceFilter}
//                 />
//                 All
//             </label>
//             <label>
//                 <input
//                 type="radio"
//                 value="api"
//                 checked={selectedTeam === "api"}
//                 onChange={handleSourceFilter}
//                 />
//                 Api
//             </label>
//                 <label>
//                     <input
//                     type="radio"
//                     value="database"
//                     checked={selectedTeam === "database"}
//                     onChange={handleSourceFilter}
//                     />
//                     Database
//                 </label>
//         </div>
//     </div>
//   )
// }

// export default Filter;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import { allTeams, filterApiDb, filterTeams, getDrivers } from "../../Redux/Actions/Actions";

const Filter = () => {
    const [selectedTeam, setSelectedTeam] = useState("default"); // Inicialmente, selecciona "default"
    const teams = useSelector((state) => state.teams);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allTeams());
    }, [dispatch]);

    const handleFilter = (e) => {
        const selectedValue = e.target.value;
        setSelectedTeam(selectedValue);
        if (selectedValue === "default") {
            // Cuando se selecciona "default", obtén todos los conductores
            dispatch(getDrivers());
        } else {
            // Cuando se selecciona un equipo específico, filtra por equipo
            dispatch(filterTeams(selectedValue));
        }
    }

    const handleSourceFilter = (e) => {
        const selectedValue = e.target.value;
        setSelectedTeam(selectedValue);
        if (selectedValue === "all") {
            // Cuando se selecciona "all", muestra todos los conductores de API y DB
            dispatch(filterApiDb("all"));
        } else if (selectedValue === "api") {
            // Cuando se selecciona "api", muestra solo los conductores de API
            dispatch(filterApiDb("api"));
        } else if (selectedValue === "database") {
            // Cuando se selecciona "database", muestra solo los conductores de DB
            dispatch(filterApiDb("database"));
        }
    }
    
    return (
        <div className="filter-container">
            <div>
                <select onChange={(e) => handleFilter(e)} value={selectedTeam}>
                    <option value="default">Filter by Team</option>
                    {teams?.map((team) => ( 
                    <option key={team.id} value={team.name}>
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


