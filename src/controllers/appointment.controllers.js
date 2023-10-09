const AppointmentServices = require("../services/appointment.services");
const BarberServices = require("../services/barber.services");
const { sendMail } = require("../repositories/mailer");
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

  static async createAppointment(req, res, next) {
    try {
      const { date, name, email, phone, time, barberId } = req.body;
      if (!date || !name || !email || !phone || !time || !barberId) {
        return res.status(400).send("Fatan datos");
      }
      const checkBarber = await BarberServices.getOneBarber(barberId);
      if (!checkBarber) {
        return res.status(404).send("This barber does not exists!");
      }
      const resp = await AppointmentServices.newAppointment(req.body);

      if (!resp.createdAppoint) {
        return res.status(401).json(resp.msg);
      }

      const dataEmail = {
        ...resp.newAppointment.dataValues,
        barber: checkBarber.name,
      };

      sendMail(dataEmail);
      res.status(201).json(dataEmail);
    } catch (error) {
      next(error);
    }
  }

  static async deleteAppointment(req, res, next) {
    try {
      const oneAppointment = await AppointmentServices.getOneAppointments(
        req.params.id
      );
      if (!oneAppointment) {
        return res.status(401).send("Appointment not found!");
      }
      await AppointmentServices.dropAppointment(oneAppointment.id, {
        date: oneAppointment.date,
        time: oneAppointment.time,
        barberId: oneAppointment.barberId,
      });

      res.status(200).json({ msg: "Appointment deleted!" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AppointmentController;
