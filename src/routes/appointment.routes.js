const express = require("express");
const AppointmentController = require("../controllers/appointment.controllers");
const router = express.Router();

router.get("/", AppointmentController.getAllAppointments);
router.post("/", AppointmentController.createAppointment);

module.exports = router;
