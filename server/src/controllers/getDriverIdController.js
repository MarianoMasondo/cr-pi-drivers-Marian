const axios = require("axios");
const { Driver, Team} = require("../db")

const driverId = async (id) => {
    if (id.length < 5) {
        const response = await axios.get(`http://localhost:5000/drivers/${id}`);
        const data = response.data;
       
        const idData = {
            Id: data.id,
            Name: data.name.forename,
            Lastname: data.name.surname,
            Description: data.description,
            Image: data.image.url || "https://images.squarespace-cdn.com/content/v1/5041475ac4aa99448132115f/1678818503863-3TYIXGRUMHR7XW0W43U4/IMG_2208.JPG",
            Nationality: data.nationality,
            Birthdate: data.dob,
            Teams: data.Team ? data.Team.map((teams) => teams.name) : [], // Check if data.Team exists
        };
        return idData;
    } else {
        searchDbId = await Driver?.findByPk(id, {
            include: {
                model: Team,
                attributes: ["Name"],
                through: { attributes: [] },
            },
        });
        return searchDbId;
    }
};

module.exports = driverId;
