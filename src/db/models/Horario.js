const { DataTypes, Model } = require("sequelize");
const db = require("../index");

class Horario extends Model {}

Horario.init(
  {
    horario_value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horario_label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avaliable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true,
    },
    dayId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    barberId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "horario",
    timestamps: false,
  }
);

module.exports = Horario;
