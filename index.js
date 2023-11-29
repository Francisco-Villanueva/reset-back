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
  origin: [
    "http://localhost:5173",
    "http://localhost:8080",
    "https://reset-client.vercel.app",
    "https://reser-admin-client.vercel.app",
  ],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", routes);
db.sync({ alter: true }).then(() => {
  console.log("db connected successfully");
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}, inicando wp`);
});
