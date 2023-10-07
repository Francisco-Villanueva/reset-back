"use strict";
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const db = require("./db");
const models = require("./models");
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

app.use("/api", routes);

db.sync({ alter: true }).then(() => {
  app.listen(3000, () => {
    console.log(`server running on port 3000, inicando wp`);
  });
});
