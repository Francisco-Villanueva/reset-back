const Barber = require("./Barber");
const Appointment = require("./Appointment");
const AppointMentSlots = require("./AppointMentSlots");
const Session = require("./Session");
Barber.hasMany(Appointment);
Barber.hasMany(AppointMentSlots);

module.exports = {
  Barber,
  Appointment,
  AppointMentSlots,
  Session,
};
