const AppointmentServices = require("../services/appointment.services");
const BarberServices = require("../services/barber.services");

class AppointmentController {
  static async getAllAppointments(req, res, next) {
    try {
      const allAppointment = await AppointmentServices.getAllAppointments();

      res.status(200).json(allAppointment);
    } catch (error) {
      next(error);
    }
  }

  static async createAppointment(req, res, next) {
    try {
      const checkBarber = await BarberServices.getOneBarber(req.body.barberId);
      if (!checkBarber) {
        return res.status(404).send("This barber does not exists!");
      }
      const resp = await AppointmentServices.newAppointment(req.body);

      res.status(201).json(resp);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AppointmentController;
