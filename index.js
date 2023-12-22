"use strict";
if (process.env.NODE_ENV === "production") {
  require("dotenv").config({ path: ".env.production" });
} else {
  require("dotenv").config({ path: ".env.development" });
}
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const db = require("./db");
const models = require("./models");
const path = require("path");

const client = require("./repositories/whatsapper");
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:8080",
    "http://localhost:8000",
    "https://reset-client.vercel.app",
    "https://reser-admin-client.vercel.app",
    "https://restt-cancel-turnos.vercel.app",
    "https://salonreset.com.ar",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
const verifyApiKey = (req, res, next) => {
  const apiKey = req.query.API_KEY;
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: "Acceso no autorizado" });
  }
  next();
};
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", verifyApiKey, routes);
db.sync({ alter: true })
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((error) => {
    console.error("Error at db sync:", error);
  });

app.listen(process.env.PORT, () => {
  console.log(
    `server running on port ${process.env.PORT}, Enviroment --> ${process.env.NODE_ENV}`
  );
});
