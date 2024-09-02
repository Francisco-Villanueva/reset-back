const express = require("express");
const router = express.Router();
const path = require("path");

const barberRoutes = require("./barber.routes");
const allAppointmentRoutes = require("./appointment.routes");
const hoursRoutes = require("./avaliableHours.routes");
const whatsappRoutes = require("./whatsapp.routes");
const WorkHoursRoutes = require("./workhours.routes");
const AuthoRoutes = require("./auth.routes");
const CustomerRoutes = require("./customer.routes");
const { sendMail } = require("../repositories/mailer");
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/welcome.html"));
});
router.use("/barbers", barberRoutes);
router.use("/appointment", allAppointmentRoutes);
router.use("/hours", hoursRoutes);
router.use("/workhours", WorkHoursRoutes);
router.use("/wp", whatsappRoutes);
router.use("/auth", AuthoRoutes);
router.use("/customers", CustomerRoutes);


router.post("/test-email", (req,res)=>{ 
  const email = req.body.email
  sendMail({
    email,
    name:"Cliente",
    barber:"Lautaro",
    date:"20/07/2024",
    time:"16:00"
  })

  res.send('mail enviado!')
});

module.exports = router;
