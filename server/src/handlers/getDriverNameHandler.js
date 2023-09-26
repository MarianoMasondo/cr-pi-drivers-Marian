const getNameDrivers = async (req, res) => {
    const { name } = req.query;
    try{
        const driver = await driverName(name);
        res.status(200).json(driver)
    }catch(error){
    res.status(400).json({error: error.message})
}

}

module.exports = getNameDrivers;