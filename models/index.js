const Barber = require("./Barber");
const Appointment = require("./Appointment");
const AppointMentSlots = require("./AppointMentSlots");
const WorkHours = require("./WorkHours");
const CancelledAppointment = require("./CancelledAppointment");
Barber.hasMany(Appointment);
Barber.hasMany(AppointMentSlots);
Barber.hasMany(WorkHours);
WorkHours.belongsTo(Barber);

module.exports = {
  Barber,
  Appointment,
  AppointMentSlots,
  WorkHours,
  CancelledAppointment
};
