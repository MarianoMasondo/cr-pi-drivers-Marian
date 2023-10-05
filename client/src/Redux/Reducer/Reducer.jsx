import {
  FILTER_ALL_TEAMS,
  FILTER_APIDB,
  FILTER_TEAMS,
  GET_DRIVERS, GET_DRIVER_DETAIL, ORDER_ASC_DESC, ORDER_BY_DOB, SEARCH_DRIVER
} from "../ActionsTypes/ActionsTypes";

const removeAccents = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

let initialState = {
  drivers: [],
  driversCopy: [],
  driverDetail: [],
  searchDriver:[],
  teams: [],
  driversApiDb: []
}

const Reducer = (state = initialState, action) => {  
  let driverOrder;
  let driversDob;
  let driversCopy;
  let driverTeams;
  let driversApiDb;
  let apiDbCopy

  switch(action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        driversCopy: action.payload 
      };

    case GET_DRIVER_DETAIL:
      return{
        ...state,
        driverDetail: action.payload,
      };

      case SEARCH_DRIVER: {
        const normalizedSearchValue = action.payload
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
      
        driversCopy = [...state.driversCopy];
        return {
          ...state,
          drivers: driversCopy.filter((driver) =>
            removeAccents(driver.name).toLowerCase().includes(normalizedSearchValue)
          ),
        };
      }
      

    case ORDER_ASC_DESC:
  driverOrder = [...state.drivers];
  driverOrder.sort((a, b) => {
    if (action.payload === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  return {
    ...state,
    drivers: driverOrder,
  }


      case ORDER_BY_DOB:
        driversDob = action.payload === "lowest"
        ? [...state.drivers].sort((a,b) => b.birthday - a.birthday)
        : [...state.drivers].sort((a,b) => a.birthday - b.birthday);
        return{
          ...state,
          drivers: driversDob
        }
      
        case FILTER_ALL_TEAMS:
          return{
            ...state,
            teams: action.payload,
          }

         case FILTER_TEAMS: 
         driversCopy = [...state.driversCopy] ;
         driverTeams =
         action.payload === "all"
         ? driversCopy
         : driversCopy.filter(
          (driver) => 
          driver.teams && driver.teams.includes(action.payload)
         );
         return {
          ...state,
          drivers: driverTeams,
        };

         case FILTER_APIDB:
          apiDbCopy = state.driversCopy;
          driversApiDb =
          action.payload ==="datatbase"
          ? apiDbCopy.filter((driver) => driver.createDb)
          : apiDbCopy.filter((driver) => !driver.createDb);
          return {
            ...state,
            drivers: action.payload === "all" ? apiDbCopy : driversApiDb
          }






    default:
      return state;
  }
}

  
  export default Reducer;