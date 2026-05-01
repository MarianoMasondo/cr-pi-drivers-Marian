const { Driver, Team } = require("../db");
const { Op } = require("sequelize");
const data = require("../../api/db.json");

const driverName = async (name) => {
  const lowercaseName = name.toLowerCase();

  const dbDrivers = await Driver.findAll({
    where: {
      name: {
        [Op.iLike]: `%${lowercaseName}%`,
      },
    },
    include: [
      {
        model: Team,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  const apiDrivers = data.drivers.filter((driver) =>
    driver.name.forename.toLowerCase().includes(lowercaseName)
  );

  const apiDataDrivers = apiDrivers.map((driver) => ({
    id: driver.id,
    name: driver.name.forename,
    lastname: driver.name.surname,
    description: driver.description,
    image:
      driver.image?.url ||
      "https://images.squarespace-cdn.com/content/v1/5041475ac4aa99448132115f/1678818503863-3TYIXGRUMHR7XW0W43U4/IMG_2208.JPG",
    nationality: driver.nationality,
    birthdate: driver.dob,
    teams: driver.teams,
  }));

  const dbDataDrivers = dbDrivers.map((driver) => ({
    id: driver.id,
    name: driver.name,
    lastname: driver.lastname,
    description: driver.description,
    image: driver.image,
    nationality: driver.nationality,
    birthdate: driver.birthdate,
    teams: driver.Teams.map((team) => team.name),
    createDb: driver.createDb,
  }));

  if (!apiDrivers.length && !dbDrivers.length) {
    throw new Error("This driver does not exist.");
  }

  return [...apiDataDrivers, ...dbDataDrivers].slice(0, 15);
};

module.exports = driverName;