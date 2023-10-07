const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Barber extends Model {}

Barber.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urLPhoto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "barber",
    timestamps: false,
  }
);

module.exports = Barber;
