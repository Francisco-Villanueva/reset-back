const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_URL } = process.env;

const db = new Sequelize(DB_URL, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {},
});
module.exports = db;
