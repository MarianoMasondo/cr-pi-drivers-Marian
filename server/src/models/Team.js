const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Team', {
    ID:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,

    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  { timestamps: false, freezeTableName: true }
  );
};