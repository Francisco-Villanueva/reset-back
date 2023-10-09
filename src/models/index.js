const Barber = require("./Barber");
const Appointment = require("./Appointment");
const AppointMentSlots = require("./AppointMentSlots");

Barber.hasMany(Appointment);
Barber.hasMany(AppointMentSlots);

module.exports = {
  Barber,
  Appointment,
  AppointMentSlots,
};
