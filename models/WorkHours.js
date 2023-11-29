const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Workhours extends Model {}

Workhours.init(
  {
    numberDay: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hours: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "work_hours",
    timestamps: false,
  }
);

module.exports = Workhours;
