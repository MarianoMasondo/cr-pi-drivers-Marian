// const axios = require('axios');
// const { Driver, Team} = require("../db")
// const { Op } = require("sequelize");

// const driverName = async (name) => {
//    try{
//        const response  = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);

//        const apiData = {
//            id: response.id,
//            name: response.name.forename,
//            lastname: response.name.surname,
//            description: response.description,
//            image: response.image.url || "https://images.squarespace-cdn.com/content/v1/5041475ac4aa99448132115f/1678818503863-3TYIXGRUMHR7XW0W43U4/IMG_2208.JPG",
//            nationality: response.nationality,
//            birthdate: response.dob,
//            teams: response.teams
//         }

//         const dbData = await Driver.findAll({
//             where: {
//                 name: {
//                     [Op.like]: `%${name}%`
//                 }
//             },
//             include: [
//                 {
//                     model: Team,
//                     attributes: ["name"],
//                     through: {
//                         attributes: []
//                     }
//                 }
//             ]
//         })

//         const dbDataDrivers = dbData.map(
//             ({
//                 id,
//                 name,
//                 lastname,
//                 description,
//                 image,
//                 nationality,
//                 birthdate,
//                 teams
//             }) => ({
//                 id: id,
//                 name: name,
//                 lastname: lastname,
//                 description: description,
//                 image: image,
//                 nationality: nationality,
//                 birthdate:birthdate,
//                 teams: teams
//             })
//             )

//             if(apiData.length === 0 && dbDataDrivers == 0) {
//                 return { message: "No drivers found whith this name"}
//             }

//             const allData = [apiData, dbData];

//             return allData;
//         }
//         catch(error){
//             return {message: "Error when searching drivers"}
//         }
// };
// module.exports = driverName;
const axios = require("axios");

const { Driver, Team } = require("../db");
const { Op } = require("sequelize");

const driverName = async (name) => {
  const URL = `http://localhost:5000/drivers?name.forename=${name}`;

  try {
    const response = await axios.get(URL);
    const apiData = response.data.results.map(
      ({
                id,
                name,
                lastname,
                description,
                image,
                nationality,
                birthdate,
                teams
            }) => ({
                id: id,
                name: name,
                lastname: lastname,
                description: description,
                image: image,
                nationality: nationality,
                birthdate:birthdate,
                teams: teams
      })
    );

    const dbData = await Driver.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
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
      limit: 15,
    });
    const dbDataDrivers = dbData.map(
      ({
        id,
        name,
        lastname,
        description,
        image,
        nationality,
        birthdate,
        teams
    }) => ({
        id: id,
        name: name,
        lastname: lastname,
        description: description,
        image: image,
        nationality: nationality,
        birthdate:birthdate,
        teams: teams
      })
    );

    if (apiData.length === 0 && dbDataDrivers.length === 0) {
      return { message: "No se encontraron videojuegos con este nombre" };
    }

    const allData = [apiData, dbData];
    return allData;
  } catch (error) {
    throw new Error("Error al buscar los juegos");
  }
};

module.exports = driverName;

















