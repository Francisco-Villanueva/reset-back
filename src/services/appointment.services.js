const { Appointment, AppointMentSlots } = require("../db/models");

class AppointmentServices {
  static async getAllAppointments(data) {
    return await Appointment.findAll();
  }

  static async newAppointment(data) {
    const [slot, newSlot] = await AppointMentSlots.findOrCreate({
      where: {
        date: data.date,
        time: data.time,
        barberId: data.barberId,
      },
      defaults: data,
    });

    if (newSlot) {
      //SI ES NUEVO ==> RETORNO   EL CREATE DE UN APPOINTMENT
      const newAppointment = await Appointment.create({
        ...data,
        avaliable: false,
      });
      return { msg: "Appointment  created!", newAppointment };
    } else if (slot.avaliable) {
      //SI NO ES NUEVO, PERO ESTA DISPONIBLE ==> RETORNO EL SLOT
      slot.avaliable = false;
      await slot.save();
      return { msg: "Slot appointment udated!", slot };
    } else {
      return { msg: "Slot appointment is not avaliable!" };
    }
  }
}

module.exports = AppointmentServices;
