const { Model, DataTypes } = require("sequelize");
const db = require("../index");

class Turno extends Model {}
Turno.init(
  {
    client_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    client_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    barberId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dayId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isBooked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Por defecto, los turnos están disponibles
    },
  },

  { sequelize: db, modelName: "turno", timestamps: false }
);

module.exports = Turno;
