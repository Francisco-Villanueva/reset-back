const AppointmentServices = require("../services/appointment.services");
const BarberServices = require("../services/barber.services");
const { sendMail } = require("../repositories/mailer");
const WorkHoursServices = require("../services/workhours.services");
class AppointmentController {
  static async getAllAppointments(req, res, next) {
    try {
      const allAppointment = await AppointmentServices.getAllAppointments();

      res.status(200).json(allAppointment);
    } catch (error) {
      next(error);
    }
  }

  static async getOneAppointments(req, res, next) {
    try {
      const oneAppointment = await AppointmentServices.getOneAppointments(
        req.params.id
      );

      res.status(200).json(oneAppointment);
    } catch (error) {
      next(error);
    }
  }

  static async getCancelledAppointments(req,res, next){
    try {
        const {barberId} = req.params
        const cancelledAppointments = await AppointmentServices.cancelledAppointments(barberId)
        res.json(cancelledAppointments)
    } catch (error) {
        next(error);
    }
}
  static async createAppointment(req, res, next) {
    try {
      const { date, name, email, phone, time, barberId } = req.body;
      const formatDate = new Date(date);

      const workDay = await WorkHoursServices.findByDay(
        formatDate.getDay().toString(),
        barberId
      );

      if (!date || !name || !email || !phone || !time || !barberId) {
        return res.status(400).send("Fatan datos");
      }

      const checkBarber = await BarberServices.getOneBarber(barberId);
      if (!checkBarber) {
        return res.status(404).send("This barber does not exists!");
      }
      if (!workDay) {
        return res.status(400).send("Este dia no trabaja el peluquero");
      }

      if (!workDay.hours.includes(time)) {
        return res.status(400).send({
          msg: "Horario no disponible",
          disponibles: workDay.hours,
          solicitud: time,
        });
      }

      //SI LLEGA A ESTE PUNTO, EL DIA Y HORARIO COINCIDEN CON LOS DISPONIBLES POR EL BARBER
      //AHORA HAY QUE VERIFICAR SI EL TURNO ESTA DISPONIBLE

      const resp = await AppointmentServices.newAppointment(req.body);

      if (!resp.createdAppoint) {
        return res.status(401).json(resp.msg);
      }

      const dataEmail = {
        ...resp.newAppointment.dataValues,
        barber: checkBarber.name,
      };

      sendMail(dataEmail);

      // const turno = resp.newAppointment;
      // const wpToSend = createMessage(turno.date, turno.time, checkBarber.name);
      // WhatsAppServices.sendWhatsapp(resp.newAppointment.phone, wpToSend);
      res.status(201).json(dataEmail);
    } catch (error) {
      next(error);
    }
  }

  static async deleteAppointment(req, res, next) {
    try {
      const appointment = await AppointmentServices.getOneAppointments(
        req.params.id
      );
      if (!appointment) {
        return res.status(401).send("Appointment not found!");
      }
      await AppointmentServices.dropAppointment(appointment.id, {
        name: appointment.name,
        email: appointment.email,
        phone: appointment.phone,
        time: appointment.time,
        date: appointment.date,
        barberId: appointment.barberId,
      });


   
      res.status(200).json({ msg: "Appointment deleted!" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AppointmentController;
