const { Router } = require("express");
const getNameDriversHandler = require("../handlers/getDriverNameHandler");
const postNewDriverHandler = require("../handlers/postDriverHandler");
const getAllDriversHandler = require("../handlers/getAllDriversHandler");
const getDriverByIdHandler = require("../handlers/getDriverIdHandler");
const deleteDriverHandler = require("../handlers/deleteDriverHandler");

const driversRoutes = Router();

driversRoutes.get("/name", getNameDriversHandler);
driversRoutes.get("/:id", getDriverByIdHandler);
driversRoutes.get("/", getAllDriversHandler);
driversRoutes.post("/", postNewDriverHandler);
driversRoutes.delete("/:id", deleteDriverHandler);

module.exports = driversRoutes;
