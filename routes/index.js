const express = require("express");
const router = express.Router();
const path = require("path");

const barberRoutes = require("./barber.routes");
const allAppointmentRoutes = require("./appointment.routes");
const hoursRoutes = require("./avaliableHours.routes");
const whatsappRoutes = require("./whatsapp.routes");
const WorkHoursRoutes = require("./workhours.routes");
const AuthoRoutes = require("./auth.routes");
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/welcome.html"));
});
router.use("/barbers", barberRoutes);
router.use("/appointment", allAppointmentRoutes);
router.use("/hours", hoursRoutes);
router.use("/workhours", WorkHoursRoutes);
router.use("/wp", whatsappRoutes);
router.use("/auth", AuthoRoutes);

module.exports = router;
