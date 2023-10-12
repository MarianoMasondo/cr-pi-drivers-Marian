const { Router } = require("express");
const getAllTeams = require("../handlers/getAllTeamsHandler");

const teamsRoutes = Router();

teamsRoutes.get("/", getAllTeams);

module.exports = teamsRoutes;
