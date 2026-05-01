const { Team } = require("../db");
const data = require("../../api/db.json");

const allTeams = async () => {
  try {
    const drivers = data.drivers;

    const uniqueTeamNames = new Set();

    drivers.forEach((driver) => {
      if (driver.teams) {
        let teams = driver.teams.split(/\s*,\s*/);

        teams.forEach((teamName) => {
          if (teamName && !uniqueTeamNames.has(teamName)) {
            uniqueTeamNames.add(teamName);
          }
        });
      }
    });

    const teamsArray = [...uniqueTeamNames];

    await Promise.all(
      teamsArray.map((teamName) =>
        Team.findOrCreate({
          where: { name: teamName },
        })
      )
    );

    const allDataTeams = await Team.findAll();

    return allDataTeams;
  } catch (error) {
    throw error;
  }
};

module.exports = allTeams;