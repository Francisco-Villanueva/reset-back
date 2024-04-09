const express = require("express");
const AppointmentController = require("../controllers/appointment.controllers");
const router = express.Router();

router.get("/", AppointmentController.getAllAppointments);
router.get("/cancelled/:barberId", AppointmentController.getCancelledAppointments);
router.get("/:id", AppointmentController.getOneAppointments);
router.post("/", AppointmentController.createAppointment);
router.delete("/:id", AppointmentController.deleteAppointment);

module.exports = router;
