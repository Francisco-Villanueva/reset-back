const { DataTypes, Model } = require("sequelize");
const db = require("../index");

class Barber extends Model {}

Barber.init(
  {
    barber_firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    barber_lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    barber_urlPhoto: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "barber",
    timestamps: false,
  }
);

module.exports = Barber;
