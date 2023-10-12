const { Driver, Team } = require("../db");
const Sequelize = require("sequelize");

const createDataDriver = async (
  name,
  lastname,
  description,
  image,
  nationality,
  birthdate,
  teams
) => {
  try {
    const newDriver = await Driver.create({
      name,
      lastname,
      description,
      image,
      nationality,
      birthdate,
    });

    const addTeams = await Team.findAll({
      where: {
        name: {
          [Sequelize.Op.in]: teams,
        },
      },
    });

    await newDriver.addTeams(addTeams);

    const driverRelation = await Driver.findOne({
      where: {
        id: newDriver.id,
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

    return driverRelation;
  } catch (error) {
    throw error;
  }
};

module.exports = createDataDriver;
