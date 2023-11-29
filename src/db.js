const { Sequelize } = require("sequelize");
require("dotenv").config();
const { RENDER_URL } = process.env;

const db = new Sequelize(RENDER_URL, {
  // host: DB_HOST,
  dialect: "postgres",
  logging: false,
});
module.exports = db;
