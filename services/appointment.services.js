const { Appointment, AppointMentSlots } = require("../models");

class AppointmentServices {
  static async getAllAppointments() {
    return await Appointment.findAll();
  }
  static async getOneAppointments(id) {
    return await Appointment.findByPk(id);
  }

  static async newAppointment(data) {
    const [slot, newSlot] = await AppointMentSlots.findOrCreate({
      where: {
        date: data.date,
        time: data.time,
        barberId: data.barberId,
      },
      defaults: { ...data, avaliable: false },
    });

    if (newSlot) {
      const newAppointment = await Appointment.create({
        ...data,
      });
      return {
        msg: "Turno  agenedado exitosamente!",
        newAppointment,
        createdAppoint: true,
      };
    } else if (slot.avaliable) {
      slot.avaliable = false;
      await slot.save();
      const newAppointment = await Appointment.create({
        ...data,
      });
      return {
        msg: "Turno  agenedado exitosamente!",
        newAppointment,
        createdAppoint: true,
      };
    } else {
      return {
        msg: "Slot appointment is not avaliable!",
        createdAppoint: false,
      };
    }
  }

  static async dropAppointment(id, data) {
    await AppointMentSlots.update(
      { avaliable: true },
      {
        where: {
          date: data.date,
          time: data.time,
          barberId: data.barberId,
        },
      }
    );

    await Appointment.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = AppointmentServices;
