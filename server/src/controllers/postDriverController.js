const { Driver, Team } = require("../db");
const Sequelize = require("sequelize");


const createDataDriver = async (name, lastname, description, image, nationality, birthdate, teams) => {
    try {
        // Create the driver
        const newDriver = await Driver.create({
            name,
            lastname,
            description,
            image,
            nationality,
            birthdate,
        });

        // Find teams based on names in the array
        const addTeams = await Team.findAll({
            where: {
                name: {
                    [Sequelize.Op.in]: teams, // Use Sequelize.Op.in to match multiple values
                },
            },
        });

        // Associate the driver with teams
        await newDriver.addTeams(addTeams);

        // Fetch the driver with associated teams
        const driverRelation = await Driver.findOne({
            where: {
                id: newDriver.id, // Use newDriver.id instead of newDriver
            },
            include: [{
                model: Team,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            }],
        });

        return driverRelation;
    } catch (error) {
        throw error;
    }
};

module.exports = createDataDriver;
