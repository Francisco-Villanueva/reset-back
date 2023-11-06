const { Sequelize } = require("sequelize");
require("dotenv").config();
const { RENDER_URL } = process.env;

const db = new Sequelize(
  "postgres://reset:7XOBNPpcAsl4QSIawnMOf05hfWoEtzeT@dpg-cl36180t3kic73d7o100-a.oregon-postgres.render.com/resetdb_ajcz",
  {
    dialect: "postgres",
    logging: false,
  }
);
module.exports = db;
