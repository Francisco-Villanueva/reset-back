"use strict";
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const db = require("./db");
const models = require("./models");
const client = require("./repositories/whatsapper");
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

app.use("/api", routes);

db.sync({ alter: true }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}, inicando wp`);
  });
});