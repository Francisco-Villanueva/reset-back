"use strict";
const express = require("express");
const router = express.Router();

const barberRoutes = require("./barber.routes");
const workhoursRoutes = require("./workHours.routes");
const allAppointmentRoutes = require("./appointment.routes");

router.use("/barbers", barberRoutes);
router.use("/barbers/wh", workhoursRoutes);
router.use("/appointment", allAppointmentRoutes);

module.exports = router;
