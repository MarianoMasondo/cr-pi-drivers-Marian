const driverName = require("../controllers/getDriverNameController");

const getNameDrivers = async (req, res) => {
    const { name } = req.query;
    const nameLower = name.toLowerCase();
    try{
        const driver = await driverName(nameLower);
        res.status(200).json(driver)
    }catch(error){
    res.status(400).json({error: error.message})
}

}

module.exports = getNameDrivers;
