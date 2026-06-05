const { Team } = require("../db");
const data = require("../../api/db.json");

const allTeams = async () => {
  const drivers = data.drivers;
  const uniqueTeamNames = new Set();

  drivers.forEach((driver) => {
    if (driver.teams) {
      const teams = driver.teams.split(/\s*,\s*/);

      teams.forEach((teamName) => {
        if (teamName) {
          uniqueTeamNames.add(teamName);
        }
      });
    }
  });

  const teamsArray = [...uniqueTeamNames].sort();

  const localTeams = teamsArray.map((name, index) => ({
    id: `local-${index}`,
    name,
  }));

  try {
    await Promise.all(
      teamsArray.map((teamName) =>
        Team.findOrCreate({
          where: {
            name: teamName,
          },
        }),
      ),
    );

    return await Team.findAll();
  } catch (error) {
    console.error(
      "PostgreSQL is unavailable. Returning local teams only:",
      error.message,
    );

    return localTeams;
  }
};

module.exports = allTeams;
