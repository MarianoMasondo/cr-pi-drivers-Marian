const { Router } = require("express");
const getAllDrivers = require("../handlers/getAllDriversHandler");
const getIdDrivers = require("../handlers/getDriverIdHandler");
const getNameDrivers = require("../handlers/getDriverNameHandler");
const postNewDriver = require("../handlers/postDriverHandler");

const driversRoutes = Router();
driversRoutes.get("/", getAllDrivers);
driversRoutes.get("/:id", getIdDrivers);
driversRoutes.get("/name", getNameDrivers);
driversRoutes.post("/", postNewDriver);

module.exports = driversRoutes;