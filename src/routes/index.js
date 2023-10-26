const express = require("express");
const router = express.Router();

const barberRoutes = require("./barber.routes");
const allAppointmentRoutes = require("./appointment.routes");
const hoursRoutes = require("./avaliableHours.routes");
const WhatsAppServices = require("../services/whatsApp.services");
const { createMessage } = require("../utils/messages");

router.use("/barbers", barberRoutes);
router.use("/appointment", allAppointmentRoutes);
router.use("/hours", hoursRoutes);

router.post("/wp", (req, res) => {
  const num = "2915275753";

  const wpToSend = createMessage("hoy", "04:00 PM", "lAUTARO");

  WhatsAppServices.sendWhatsapp(num, wpToSend);

  res.send({ msg: "enviado" });
});

module.exports = router;
