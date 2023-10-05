import {
  GET_DRIVERS, GET_DRIVER_DETAIL, ORDER_ASC_DESC, ORDER_BY_DOB, SEARCH_DRIVER
} from "../ActionsTypes/ActionsTypes";

let initialState = {
  drivers: [],
  driversCopy: [],
  driverDetail: [],
  searchDriver:[],
}

const Reducer = (state = initialState, action) => {  
  let driverOrder;
  let driversDob;
  let driversCopy

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

    case SEARCH_DRIVER:{
      driversCopy = [...state.driversCopy];            
      return{
        ...state,
        drivers: driversCopy.filter((driver) => 
      driver.name.toLowerCase().includes(action.payload.toLowerCase())),  
        
      }
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
      
    default:
      return state;
  }
}
  
  export default Reducer;