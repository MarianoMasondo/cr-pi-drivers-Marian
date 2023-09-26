const axios = require("axios");
const { Driver, Team} = require ("../db")

const allDrivers = async() => {
    let response = await axios.getAdapter(" http://localhost:5000/drivers");
    let results = response.data.results;


}

module.exports = allDrivers