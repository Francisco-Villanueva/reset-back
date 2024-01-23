const { hash } = require("bcrypt");
const BarberServices = require("../services/barber.services");
const WorkHoursServices = require("../services/workhours.services");
require("dotenv").config();
class BarberController {
  static async getAllBarber(req, res) {
    try {
      const allBarbers = await BarberServices.getBarbers();

      res.status(200).json(allBarbers.filter((barber) => !barber.isAdmin));
    } catch (error) {
      res.status(500);
      console.log(error);
    }
  }
  static async getActiveBarbers(req, res) {
    try {
      const activeBarbers = await BarberServices.getActiveBarbers();

      res.status(200).json(activeBarbers);
    } catch (error) {
      res.status(500);
      console.log(error);
    }
  }
  static async getBarberById(req, res) {
    try {
      const { id } = req.params;

      const barber = await BarberServices.getOneBarber(id);

      res.status(200).json(barber);
    } catch (error) {
      console.log(error);
    }
  }
  static async getAppointmentsByBarber(req, res) {
    try {
      const { id } = req.params;

      const barber = await BarberServices.getOneBarber(id);

      res.status(200).json(barber.appointments);
    } catch (error) {
      console.log(error);
    }
  }
  static async getAppointmentByDate(req, res) {
    try {
      const { barberId} = req.params;
      const { appointmentDate} = req.body;

      const barber = await BarberServices.getOneBarber(barberId);
      
      const appointmentsByDate = barber.appointments.filter(appointment=>appointment.date === appointmentDate)

      res.status(200).json(appointmentsByDate)
    } catch (error) {
      console.log(error);
    }
  }

  static async newBarber(req, res) {
    try {
      const { name, lastName } = req.body;

      if (!name || !lastName) {
        return res.status(401).send("Faltan datos!");
      }

      const DEFAULT_HORUS =  [
        "10:00",
        "11:00",
        "12:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00"
      ]

      const newBarber = await BarberServices.createBarber(req.body);
      ["2","3","4","5","6"].forEach(async numberDay=>{
       await WorkHoursServices.create({
          barberId: newBarber.id,
          hours: DEFAULT_HORUS,
          numberDay
        })
      })
      res.status(200).json({ newBarber });
    } catch (error) {
      res.status(500);
      console.log(error);
    }
  }

  static async updateBarber(req, res) {
    try {      
      if(req.body.password){
        req.body.password = await hash(
          req.body.password,
          parseInt(process.env.HASH_SALT)
        );
      }
      const updatedBarber = await BarberServices.updateBarberHours(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedBarber);
    } catch (error) {
      console.log(error);
    }
  }
  static async deleteBarber(req, res) {
    try {
      const barber = await BarberServices.getOneBarber(req.params.id);

      if (!barber) {
        return res.status(401).send("Barber not found!");
      }

      const barberDeleted = await BarberServices.destroyBarber(req.params.id);

      res.status(200).json({ msg: "barber deleted!", barberDeleted });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BarberController;
