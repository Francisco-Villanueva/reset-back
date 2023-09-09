"use strict";
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db");
const models = require("./db/models");
const { client } = require("./routes/utils/whatsapper");
const corsOptions = {
  origin: "http://localhost:5173",
  // Agrega otras opciones de configuración si es necesario.
};

app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

// app.use(morgan.dev);
app.use("/", routes);

db.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log(`server running on port 3000, inicando wp`);
  });
});
