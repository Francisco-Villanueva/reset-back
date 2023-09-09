const { DataTypes, Model } = require("sequelize");
const db = require("../index");

class Day extends Model {}

Day.init(
  {
    day_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "day",
    timestamps: false,
  }
);

module.exports = Day;
