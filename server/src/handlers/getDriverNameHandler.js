const driverName = require("../controllers/getDriverNameController");

const getNameDrivers = async (req, res) => {
    const { name } = req.query;
    const nameLower = name.toLowerCase();
    console.log(nameLower);

    try {
        const drivers = await driverName(nameLower)
        res.status(200).json(drivers);
    }catch(error){
        res.status(404).json({error: error.message})
    }
}

module.exports = getNameDrivers;



