// const driverName = require("../controllers/getDriverNameController");

// // const getNameDrivers = async (req, res) => {
// //     const { name } = req.query;
// //     const nameLower = name.toLowerCase();
// //     try{
// //         const driver = await driverName(nameLower);
// //         res.status(200).json(driver)
// //     }catch(error){
// //     res.status(400).json({error: error.message})
// // }

// // }
// const getNameDrivers = async (req, res) => {
//     const { name } = req.query;
    
//     try{
//         const driver = await driverName(name);
//         res.status(200).json(driver)
//     }catch(error){
//     res.status(400).json({error: error.message})
// }

// }

// module.exports = getNameDrivers;
const driverName = require("../controllers/getDriverNameController");

// const getNameDrivers = async (req, res) => {
//     const { name } = req.query;
//     const nameLower = name.toLowerCase();
    
//     try {
//         const drivers = await driverName(nameLower);
//         res.status(200).json(drivers);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };
const getNameDrivers = async (req,res) => {
    const { name } = req.query;
    
    const results = name ? await searchDriverByName(name) : await driverName()

    res.status(200).json(results);
    
};

module.exports = getNameDrivers;



