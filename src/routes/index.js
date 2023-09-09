"use strict";
const express = require("express");
const router = express.Router();
const { test } = require("./services/services");
const {
  getAllBarber,
  getBarberById,
} = require("./services/Barber/barber_services");
const {
  newTurno,
  getAllTurnos,
  deleteTurno,
} = require("./services/Turnos/turnos_services");
const {
  getAllDays,
  getDays_byBarber,
} = require("./services/Days/days_services");
const { getHorarios } = require("./services/horarios/horarios_services");

router.get("/test", test);

router.get("/turnos", getAllTurnos);
router.post("/turnos", newTurno);
router.delete("/turnos/:id", deleteTurno);

router.get("/barbers", getAllBarber);
router.get("/barbers/:id", getBarberById);

router.get("/days", getAllDays);
router.get("/days_barber/:barber_id", getDays_byBarber);

router.get("/horarios/:barber_id/:day", getHorarios);

module.exports = router;
