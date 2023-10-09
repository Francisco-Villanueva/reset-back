const { Model, DataTypes } = require("sequelize");
const db = require("../db");

class Appointment extends Model {}
Appointment.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    barberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // dayId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    // isBooked: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false,
    // },
  },

  { sequelize: db, modelName: "appointment", timestamps: false }
);

module.exports = Appointment;
