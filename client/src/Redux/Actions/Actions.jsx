import axios from "axios";

import { GET_DRIVERS,
 } from "../ActionsTypes/ActionsTypes";

 export function getDrivers () {
    return async function (dispatch) {
        try {const drivers = await axios.get(`http://localhost:3001/drivers`);
    dispatch({type: GET_DRIVERS, payload: drivers.data});
} catch(error){
    console.log(error)
}
    }
 }