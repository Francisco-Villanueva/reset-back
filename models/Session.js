const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Session extends Model {}

Session.init(
  {
    session_data: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize: db,
    modelName: "Session",
    timestamps: false,
  }
);

module.exports = Session;
