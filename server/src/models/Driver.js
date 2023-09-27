const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    Id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,

    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Lastname:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Image:{
      type: DataTypes.STRING,
      allowNull: false,     

    },
    Nationality:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Birthdate:{
      type: DataTypes.DATE,

    },
  },
  { timestamps: false, freezeTableName: true }
  );
};