// const axios = require("axios");
// const { Driver, Team} = require("../db");
// const { Op } = require("sequelize");

// // const driverName = async (name) => {
// //     try {
// //         const response = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`
// //         );
// //         const apiData = response.data.results.map( 
// //             ({
// //             id,
// //             forename,
// //             surname,
// //             description,
// //             image,
// //             nationality,
// //             dob, 
// //             }) => ({  
            
// //             id: id,
// //             name: name[forename],
// //             lastname: name[surname],
// //             description: description,
// //             image: image.url || "https://images.squarespace-cdn.com/content/v1/5041475ac4aa99448132115f/1678818503863-3TYIXGRUMHR7XW0W43U4/IMG_2208.JPG",
// //             nationality: nationality,
// //             birthdate: dob, 
// //         })
// //         )

// //         const dbData = await Driver.findAll({
// //             where: {
// //                 name: {
// //                     [Op.iLike]: `%${name}%` // Use % for wildcard matching
// //                 },
// //             },
// //             include: [
// //                 {
// //                     model: Team,
// //                     attributes: ["name"],
// //                 through: {
// //                     attributes: [],
// //                 },
            
// //                 },
// //             ],
// //         })

// //         const dbDataDriver = dbData.map(
// //             ({
// //                 id,
// //                 name,
// //                 lastname,
// //                 description,
// //                 image,
// //                 nationality,
// //                 birthdate,  
// //             }) => ({
// //                 id: id,
// //                 name: name,
// //                 lastname: lastname,
// //                 description: description,
// //                 image: image,
// //                 nationality: nationality,
// //                 birthdate: birthdate,
// //             })
// //         )

// //         if(apiData.length === 0 && dbDataDriver === 0){
// //             return { message: "No driver with this name were found"}
// //         }

// //         const allData = [apiData, dbData];
// //         return allData;
// //     } catch(error){
// //         return {message: "Error when searching for driver"}
// //     }
// // }
// const driverName = async (name) => {
//     const dbDrivers = await Driver.findAll();
//     const filteredBdd = dbDrivers.filter((driver) => driver.name.toLowerCase() === name.toLowerCase());

//     const apiDriversRaw = (await axios.get('http://localhost:5000/drivers')).data;
//     const apiDrivers = cleanArray(apiDriversRaw);

//     const filteredApi = apiDrivers.filter((driver) => driver.nombre.toLowerCase() === nombre.toLowerCase());

//     const allDriversName = filteredBdd.concat(filteredApi).slice(0,15);
//     return allDriversName;   


// }

// module.exports = driverName;
//controller
// controller
// controller
// controller
const axios = require("axios");
const { Driver, Team } = require("../db");
// const { Op } = require("sequelize");

const driverName = async (name) => {
    // const databaseDrivers = await Driver.findAll({ where: { nombre:{ [ Op.iLike]: `${nombre}`}  } });
    const databaseDrivers = await Driver.findAll();
    const filteredBdd = databaseDrivers.filter((driver) => driver.name.toLowerCase() === name.toLowerCase());
 
    console.log(`http://localhost:5000/drivers?name.forename=${name}`);
    const apiDriversRaw = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);
    console.log('Response from API:', apiDriversRaw);
    

     const apiDrivers = cleanArray(apiDriversRaw);
 
     const filteredApi = apiDrivers.filter((driver) => driver.name.toLowerCase() === name.toLowerCase());
 
     const allDriversName = filteredBdd.concat(filteredApi).slice(0,15);
     return allDriversName;    
 };

// const driverName = async (name) => {
//     try {
//         // Buscar conductores exactos en la base de datos local
//         const dbDrivers = await Driver.findAll({
//             where: {
//                 name: {
//                     [Op.iLike]: `%${name}%`
//                 }
//             },
//             include: [
//                 {
//                     model: Team,
//                     attributes: ["name"],
//                     through: {
//                         attributes: [],
//                     },
//                 },
//             ],
//         });

//         // Realizar una solicitud a la API externa para obtener conductores por nombre
//         const apiResponse = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);
//         const apiDrivers = apiResponse.data;

//         // Filtrar la respuesta de la API para encontrar el conductor específico
//         const matchingApiDriver = apiDrivers.find(driver => (
//             driver.name.forename === name || driver.name.surname === name
//         ));

//         if (!matchingApiDriver && dbDrivers.length === 0) {
//             return { message: "No drivers with this name were found" };
//         }

//         if (matchingApiDriver) {
//             return matchingApiDriver;
//         }

//         return dbDrivers;
//     } catch (error) {
//         // Manejo de errores, puedes personalizar este bloque según tus necesidades
//         console.error("Error in driverName:", error);
//         throw error;
//     }
// };

module.exports = driverName;

















