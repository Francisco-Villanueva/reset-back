"use strict";
const express = require("express");
const router = express.Router();

const barberRoutes = require("./barber.routes");
const workhoursRoutes = require("./workHours.routes");
const allAppointmentRoutes = require("./appointment.routes");

router.use("/barbers", barberRoutes);
router.use("/barbers/wh", workhoursRoutes);
router.use("/appointment", allAppointmentRoutes);

const {
  getAllDays,
  getDays_byBarber,
} = require("./services/Days/days_services");
const { getHorarios } = require("./services/horarios/horarios_services");

router.get("/days", getAllDays);
router.get("/days_barber/:barber_id", getDays_byBarber);

router.get("/horarios/:barber_id/:day", getHorarios);

module.exports = router;
