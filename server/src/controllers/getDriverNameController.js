const axios = require("axios");
const { Driver, Team} = require("../db");
const { Op } = require("sequelize");

const driverName = async (name) => {
    try {
        const response = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`
        );
        const apiData = response.data.results.map( 
            ({
            id,
            forename,
            surname,
            description,
            image,
            nationality,
            dob, 
            }) => ({  
            
            id: id,
            name: name[forename],
            lastname: name[surname],
            description: description,
            image: image.url || "https://images.squarespace-cdn.com/content/v1/5041475ac4aa99448132115f/1678818503863-3TYIXGRUMHR7XW0W43U4/IMG_2208.JPG",
            nationality: nationality,
            birthdate: dob, 
        })
        )

        const dbData = await Driver.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%` // Use % for wildcard matching
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
        })

        const dbDataDriver = dbData.map(
            ({
                id,
                name,
                lastname,
                description,
                image,
                nationality,
                birthdate,  
            }) => ({
                id: id,
                name: name,
                lastname: lastname,
                description: description,
                image: image,
                nationality: nationality,
                birthdate: birthdate,
            })
        )

        if(apiData.length === 0 && dbDataDriver === 0){
            return { message: "No driver with this name were found"}
        }

        const allData = [apiData, dbData];
        return allData;
    } catch(error){
        return {message: "Error when searching for driver"}
    }
}
module.exports = driverName;








