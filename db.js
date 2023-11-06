const { Sequelize } = require("sequelize");
require("dotenv").config();
const { RENDER_URL } = process.env;

const db = new Sequelize(RENDER_URL, {
  dialect: "postgres",
  logging: false,
});
module.exports = db;
