const Barber = require("./Barber");
const Day = require("./Day");
const Horario = require("./Horario");
const Turno = require("./Turno");

Barber.hasMany(Turno, { as: "barber_turno" });
Barber.hasMany(Horario, { as: "barber_horario" });

Day.hasMany(Turno, { as: "day_turno" });
Day.hasMany(Horario, { as: "day_horario" });

module.exports = {
  Barber,
  Turno,
  Day,
  Horario,
};
