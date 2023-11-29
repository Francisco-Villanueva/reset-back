const express = require("express");
const router = express.Router();

const barberRoutes = require("./barber.routes");
const allAppointmentRoutes = require("./appointment.routes");
const hoursRoutes = require("./avaliableHours.routes");
const whatsappRoutes = require("./whatsapp.routes");
const WorkHoursRoutes = require("./workhours.routes");

router.use("/barbers", barberRoutes);
router.use("/appointment", allAppointmentRoutes);
router.use("/hours", hoursRoutes);
router.use("/workhours", WorkHoursRoutes);
router.use("/wp", whatsappRoutes);

module.exports = router;
