const Barber = require("./Barber");
const Appointment = require("./Appointment");
const AppointMentSlots = require("./AppointMentSlots");
const WorkHours = require("./WorkHours");

Barber.hasMany(Appointment);
Barber.hasMany(AppointMentSlots);
Barber.hasMany(WorkHours);

// WorkHours.belongsTo(Barber);
// Day.hasMany(Turno, { as: "day_turno" });
// Day.hasMany(Horario, { as: "day_horario" });

module.exports = {
  Barber,
  Appointment,
  WorkHours,
  AppointMentSlots,
};
