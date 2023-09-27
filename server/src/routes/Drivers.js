const { Router } = require("express");
const getNameDrivers = require("../handlers/getDriverNameHandler");
const postNewDriver = require("../handlers/postDriverHandler");
const getAllDrivers = require("../handlers/getAllDriversHandler");
const getDriverById = require("../handlers/getDriverIdHandler");

const driversRoutes = Router();
driversRoutes.get("/:id", getDriverById); // Usar un parámetro de ruta para obtener un conductor por ID
driversRoutes.get("/name", getNameDrivers);

driversRoutes.post("/", postNewDriver);
driversRoutes.get("/", getAllDrivers); // Ruta para obtener todos los conductores

module.exports = driversRoutes;


