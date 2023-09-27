const { Driver, Team } = require("../db");

const createDataDriver = async ( name, lastname, description, image, nationality, birthdate, teams) => {

    const newDriver = await Driver.create({ name, lastname, description, image, nationality, birthdate, teams});
    
       await newDriver.addTeams(teams);
    
        const driverNew = await Driver.findByPk(newDriver.id, {
          include: {
              model: Team,
              attributes:["name"],
              through: {
                attributes: []
              }
          },
        });
      return driverNew;
    }
    module.exports = createDataDriver;