import {
  GET_DRIVERS
} from "../ActionsTypes/ActionsTypes";

let initialState = {
  drivers: [],
  driversCopy: []
}

const Reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: [...action.payload],
        driversCopy: [...action.payload] 
      };
    default:
      return state;
  }
}
  
  export default Reducer;