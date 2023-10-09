const express = require("express");
const router = express.Router();

const barberRoutes = require("./barber.routes");
const allAppointmentRoutes = require("./appointment.routes");
const hoursRoutes = require("./avaliableHours.routes");

router.use("/barbers", barberRoutes);
router.use("/appointment", allAppointmentRoutes);
router.use("/hours", hoursRoutes);

module.exports = router;
