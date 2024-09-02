const Barber = require("./Barber");
const Appointment = require("./Appointment");
const AppointMentSlots = require("./AppointMentSlots");
const WorkHours = require("./WorkHours");
const CancelledAppointment = require("./CancelledAppointment");
const Customer = require("./Customer");
Barber.hasMany(Appointment);
Barber.hasMany(AppointMentSlots);
Barber.hasMany(WorkHours);
WorkHours.belongsTo(Barber);

module.exports = {
  Barber,
  Customer,
  Appointment,
  AppointMentSlots,
  WorkHours,
  CancelledAppointment
};
