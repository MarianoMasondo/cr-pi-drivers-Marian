const axios = require("axios");
const { Driver, Team } = require("../db");

const allDrivers = async () => {
  try {
    let response = await axios.get(`http://localhost:5000/drivers`);
    let results = response.data;

    const dataDriver = await Promise.all(
        results.map(async (driverData) => {
          return {
            id: driverData.id,
            name: driverData.name.forename,
            lastname: driverData.name.surname,
            description: driverData.description,
            image: driverData.image.url || "https://images.squarespace-cdn.com/content/v1/5041475ac4aa99448132115f/1678818503863-3TYIXGRUMHR7XW0W43U4/IMG_2208.JPG",
            nationality: driverData.nationality,
            birthdate: driverData.dob,
            teams: driverData.teams,
          };
        })
      );
      
        

    const dbdata = await Driver.findAll({
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

    const dbDataDrivers = dbdata.map((driver) => ({
      id: driver.id,
      name: driver.name,
      lastname: driver.lastname,
      description: driver.description,
      image: driver.image,
      nationality: driver.nationality,
      birthdate: driver.birthdate,
      teams: driver.Team ? driver.Team.map((team) => team.name) : [], 
  createDB: driver.createDB,
    }));

    const allData = [...dataDriver, ...dbDataDrivers];
    return allData;
  } catch (error) {
    throw error;
  }
};

module.exports = allDrivers;

            