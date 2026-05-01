const { Driver, Team } = require("../db");

const deleteDriver = async (id) => {
  const driver = await Driver.findByPk(id, {
    include: [
      {
        model: Team,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  if (!driver) {
    throw new Error("Driver not found");
  }

  // Seguridad: solo permitimos borrar drivers creados en DB.
  // Los drivers originales tienen id numérico y vienen del db.json.
  if (String(id).length < 5) {
    throw new Error("You cannot delete original API drivers");
  }

  await driver.setTeams([]);
  await driver.destroy();

  return {
    message: "Driver deleted successfully",
    id,
  };
};

module.exports = deleteDriver;