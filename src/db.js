const { Sequelize } = require("sequelize");

const db = new Sequelize("resetdb", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false, // Esto evita que se muestren las consultas SQL en la consola
});

module.exports = db;
