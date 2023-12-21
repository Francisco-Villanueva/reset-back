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
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    urLPhoto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM(["active", "inactive"]),
      defaultValue: "active",
    },
  },
  {
    sequelize: db,
    modelName: "barber",
    timestamps: false,
  }
);

module.exports = Barber;
