import axios from "axios";

import { GET_DRIVERS, GET_DRIVER_DETAIL,
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

 export function getDriverDetail(id){
    return async function (dispatch){
        try {
            const driverDetail = await axios.get(`http://localhost:3001/drivers/${id}`);
            dispatch({
                type: GET_DRIVER_DETAIL,
                payload: driverDetail.data,
            })
        } catch(error){
            console.log(error)
        }
    }
 }