"use strict";
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const db = require("./db");
const models = require("./models");
require("dotenv").config();

const client = require("./repositories/whatsapper");
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(5432, () => {
  console.log(`server running on port ${5432}, inicando wp`);
});
