const axios = require("axios");
const { Team } = require("../db");

const allTeams = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/drivers`);
    const drivers = response.data;

    const uniqueTeamNames = new Set(); // Usar un conjunto para mantener los nombres únicos

    drivers.forEach(driver => {
      if (driver.teams) {
        let teams = driver.teams.split(/\s*,\s*/);

        teams.forEach(teamName => {
          // Verificar si el nombre del equipo ya existe en el conjunto
          if (!uniqueTeamNames.has(teamName)) {
            uniqueTeamNames.add(teamName);

            Team.findOrCreate({
              where: {
                name: teamName
              }
            });
          }
        });
      }
    });

    const allDataTeams = await Team.findAll();
    return allDataTeams;
  } catch (error) {
    throw error; // Puedes manejar los errores de manera más apropiada si es necesario.
  }
};

module.exports = allTeams;

