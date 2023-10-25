const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  logging: false, // Esto evita que se muestren las consultas SQL en la consola
});

module.exports = db;
