const createDataDriver = require("../controllers/postDriverController");

const postNewDriver = async (req,res) => {
    const { name, lastname, description, image, nationality, birthdate, teams} = req.body;
    try {
        const newDriver = await createDataDriver( name, lastname, description, image, nationality, birthdate, teams);
        res.status(201).json(newDriver);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = postNewDriver;
