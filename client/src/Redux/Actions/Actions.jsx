import axios from "axios";

import { FILTER_ALL_TEAMS, FILTER_APIDB, FILTER_TEAMS, GET_DRIVERS, GET_DRIVER_DETAIL, ORDER_ASC_DESC, ORDER_BY_DOB, SEARCH_DRIVER,
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

 export const searchDriver = (name) => {
    return {
        type: SEARCH_DRIVER,
        payload: name,
    };
 }

 export const orderDrivers = (payload) => {
    return {
        type: ORDER_ASC_DESC,
        payload
    }
 }
 export const orderByDob = (payload) => {
    return {
        type: ORDER_BY_DOB,
        payload
    }
 }

 export const allTeams = () => {
    return async(dispatch) => {
        try{
            const apiData = await axios.get(`http://localhost:3001/teams`);
            const teams = apiData.data;
            dispatch({
                type: FILTER_ALL_TEAMS,
                payload: teams,
            })
        } catch(error){
            console.log(error.message)
        }
    }
 }

 export const filterTeams = (payload) => {
    return {
        type: FILTER_TEAMS,
        payload,
    }
 }
 export const filterApiDb = (payload) => {
    return {
        type: FILTER_APIDB,
        payload,
    }
 }