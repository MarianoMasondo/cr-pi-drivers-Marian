const axios = require("axios");
const { Driver, Team } = require("../db");

const allDrivers = async () => {
  try {
    let response = await axios.get(`http://localhost:5000/drivers`);
    let results = response.data;

    const dataDriver = await Promise.all(
        results.map(async (driverData) => {
          return {
            Id: driverData.id,
            Name: driverData.name.forename,
            Lastname: driverData.name.surname,
            Description: driverData.description,
            Image: driverData.image.url || "https://images.squarespace-cdn.com/content/v1/5041475ac4aa99448132115f/1678818503863-3TYIXGRUMHR7XW0W43U4/IMG_2208.JPG",
            Nationality: driverData.nationality,
            Birthdate: driverData.dob,
            Teams: driverData.teams 
          };
        })
      );
      
        

    const dbdata = await Driver.findAll({
      include: [
        {
          model: Team,
          attributes: ["Name"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    const dbDataDrivers = dbdata.map((driver) => ({
      Id: driver.id,
      Name: driver.Name,
      Lastname: driver.Lastname,
      Description: driver.Description,
      Image: driver.Image,
      Nationality: driver.Nationality,
      Birthdate: driver.Birthdate,
      Teams: driver.Teams.map((team) => team.name),
      createDB: driver.createDB,
    }));

    const allData = [...dataDriver, ...dbDataDrivers];
    return allData;
  } catch (error) {
    throw error;
  }
};

module.exports = allDrivers;

            