const createMessage = (date = "", time = "", barber = "") => {
  const appointmentMessage = `*~ RESET SALON ~*\n----------\n Turno agendado exitosamente!\n- Dia: *${date}*\n- Horario: *${time}*\n- Peluquero: *${barber}*\n`;
  const cancelMessage = `\nPara *cancelar* el turno`;

  return appointmentMessage;
};

module.exports = {
  createMessage,
};
