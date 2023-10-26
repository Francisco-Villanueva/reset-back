const createMessage = (date = "", time = "", barber = "") => {
  return `*~ RESET SALON ~*\n----------\n Turno agendado exitosamente!\n- Dia: *${date}*\n- Horario: *${time}*\n- Pelquero: *${barber}*\n`;
};

module.exports = {
  createMessage,
};
