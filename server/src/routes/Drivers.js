const { Router } = require("express");
const getNameDrivers = require("../handlers/getDriverNameHandler");
const postNewDriver = require("../handlers/postDriverHandler");
const getAllDrivers = require("../handlers/getAllDriversHandler");
const getDriverById = require("../handlers/getDriverIdHandler");

const driversRoutes = Router();
driversRoutes.get("/name", getNameDrivers);
driversRoutes.get("/:id", getDriverById);
driversRoutes.get("/", getAllDrivers);
driversRoutes.post("/", postNewDriver);

module.exports = driversRoutes;
