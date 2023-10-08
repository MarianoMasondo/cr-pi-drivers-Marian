import {
  FILTER_ALL_TEAMS,
  FILTER_APIDB,
  FILTER_TEAMS,
  GET_DRIVERS, GET_DRIVER_DETAIL, ORDER_ASC_DESC, ORDER_BY_DOB, PAGINATE, SEARCH_DRIVER
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
  driversApiDb: [],
  currentPage: 0,
  
}

const Reducer = (state = initialState, action) => {  
  let driverOrder;
  let driversDob;
  let driversCopy;
  let driverTeams;
  let driversApiDb;
  let apiDbCopy;
  let itemsPerPage = 9;
  let next_page, prev_page, firstIndex;

  switch(action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: [...action.payload].splice(0, itemsPerPage),
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
  driverOrder = [...state.driversCopy];
  
  driverOrder.sort((a, b) => {
    if (action.payload === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  return {
    ...state,   
    drivers:[ ...driverOrder].splice(0, itemsPerPage),
    currentPage: 0,
  }

case ORDER_BY_DOB:  
  driversDob = action.payload === "asc"
    ? [...state.drivers].sort((a, b) => (a.birthday - b.birthday))
    : [...state.drivers].sort((a, b) => (b.birthday - a.birthday));   
    
    return {
      ...state,
      drivers: driversDob,
      currentPage: 0,
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
          drivers:[ ...driverTeams].splice(0, itemsPerPage),
          
          currentPage: 0,
        };

        case FILTER_APIDB:
          apiDbCopy = state.driversCopy;
          driversApiDb = 
          action.payload === "database" 
            ? apiDbCopy.filter((driver) => driver.createDb)
            : apiDbCopy.filter((driver) => !driver.createDb)
          return {
              ...state,
              drivers: action.payload === "all" ? apiDbCopy : driversApiDb,
              currentPage: 0,
          }


          case PAGINATE:
  next_page = state.currentPage + 1;
  prev_page = state.currentPage - 1;
  firstIndex =
    action.payload === "next"
      ? next_page * itemsPerPage
      : prev_page * itemsPerPage;

  driversCopy = state.driversCopy; 

  if (action.payload === "next" && firstIndex >= state.driversCopy.length)
    return state;
  else if (action.payload === "prev" && prev_page < 0) return state;

  return {
    ...state,
    drivers: [...driversCopy].slice( 
      firstIndex,
      firstIndex + itemsPerPage
    ),
    currentPage: action.payload === "next" ? next_page : prev_page,
  };

    default:
      return state;
  }
}

  
  export default Reducer;