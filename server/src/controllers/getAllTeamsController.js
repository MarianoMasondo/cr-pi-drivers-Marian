const axios = require("axios");
const { Team } = require("../db");

const allTeams = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/drivers`);
    const drivers = response.data;

    const uniqueTeamNames = new Set();

    drivers.forEach((driver) => {
      if (driver.teams) {
        let teams = driver.teams.split(/\s*,\s*/);

        teams.forEach((teamName) => {
          if (!uniqueTeamNames.has(teamName)) {
            uniqueTeamNames.add(teamName);

            Team.findOrCreate({
              where: {
                name: teamName,
              },
            });
          }
        });
      }
    });

    const allDataTeams = await Team.findAll();
    return allDataTeams;
  } catch (error) {
    throw error;
  }
};

module.exports = allTeams;
