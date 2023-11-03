const express = require("express");
const router = express.Router();

const barberRoutes = require("./barber.routes");
const allAppointmentRoutes = require("./appointment.routes");
const hoursRoutes = require("./avaliableHours.routes");
const whatsappRoutes = require("./whatsapp.routes");
const WhatsAppServices = require("../services/whatsApp.services");
const { createMessage } = require("../utils/messages");
const { sendMail } = require("../repositories/mailer");

router.use("/barbers", barberRoutes);
router.use("/appointment", allAppointmentRoutes);
router.use("/hours", hoursRoutes);
router.use("/wp", whatsappRoutes);

router.post("/wp", (req, res) => {
  const num = "2915275753";

  const wpToSend = createMessage("hoy", "04:00 PM", "lAUTARO");

  WhatsAppServices.sendWhatsapp(num, wpToSend);

  res.send({ msg: "enviado" });
});

router.post("/test", (req, res) => {
  const data = {
    email: "franciscovillanuevaj99@gmail.com",
    name: "panchio",
    date: "Lunes 06",
    time: "18:00 HS",
  };
  sendMail(data);

  res.send({ mail: "enviado" });
});

module.exports = router;
