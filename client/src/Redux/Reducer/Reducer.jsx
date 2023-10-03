import {
  GET_DRIVERS, GET_DRIVER_DETAIL
} from "../ActionsTypes/ActionsTypes";

let initialState = {
  drivers: [],
  driversCopy: []
}

const Reducer = (state = initialState, action) => {
  const itemsPerPage = 9;

  switch(action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: [...action.payload].splice(0, itemsPerPage),
        driversCopy: [...action.payload] 
      };

    case GET_DRIVER_DETAIL:
      return{
        ...state,
        driverDetail: action.payload,
      };

      
    default:
      return state;
  }
}
  
  export default Reducer;