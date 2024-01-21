const express = require("express");
const BarberController = require("../controllers/barber.controllers");
const router = express.Router();

router.get("/", BarberController.getAllBarber);
router.get("/active", BarberController.getActiveBarbers);
router.get("/:id/appointments", BarberController.getAppointmentsByBarber);
router.get("/:id", BarberController.getBarberById);
router.get("/:barberId/appointmentsByDate", BarberController.getAppointmentByDate);
router.post("/", BarberController.newBarber);
router.put("/:id", BarberController.updateBarber);
router.delete("/:id", BarberController.deleteBarber);

module.exports = router;
