const { Driver, Team } = require("../db");
const data = require("../../api/db.json");

const driverId = async (id) => {
  if (id.length < 5) {
    const driverData = data.drivers.find(
      (driver) => Number(driver.id) === Number(id)
    );

    if (!driverData) {
      throw new Error("Driver not found");
    }

    const idData = {
      id: driverData.id,
      name: driverData.name.forename,
      lastname: driverData.name.surname,
      description: driverData.description,
      image:
        driverData.image?.url ||
        "https://images.squarespace-cdn.com/content/v1/5041475ac4aa99448132115f/1678818503863-3TYIXGRUMHR7XW0W43U4/IMG_2208.JPG",
      nationality: driverData.nationality,
      birthdate: driverData.dob,
      teams: driverData.teams,
    };

    return idData;
  } else {
    const searchById = await Driver.findByPk(id, {
      include: [
        {
          model: Team,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    if (!searchById) {
      throw new Error("Driver not found");
    }

    return {
      id: searchById.id,
      name: searchById.name,
      lastname: searchById.lastname,
      description: searchById.description,
      image: searchById.image,
      nationality: searchById.nationality,
      birthdate: searchById.birthdate,
      teams: searchById.Teams.map((team) => team.name),
      createDb: searchById.createDb,
    };
  }
};

module.exports = driverId;
