const { DataTypes, Model } = require("sequelize");
const db = require("../index");

class Workhours extends Model {}

Workhours.init(
  {
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
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
