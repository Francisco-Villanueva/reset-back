const { Model, DataTypes } = require("sequelize");
const db = require("../index");
class AppointMentSlots extends Model {}
AppointMentSlots.init(
  {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avaliable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    barberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "appointment_slots", timestamps: false }
);

module.exports = AppointMentSlots;
