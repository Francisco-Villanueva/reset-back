const BarberServices = require("../services/barber.services");

class BarberController {
  static async getAllBarber(req, res) {
    try {
      const allBarbers = await BarberServices.getBarbers();

      res.status(200).json(allBarbers);
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

  static async newBarber(req, res) {
    try {
      const newBarber = await BarberServices.createBarber(req.body);

      res.status(200).json({ newBarber });
    } catch (error) {
      res.status(500);
      console.log(error);
    }
  }
}

module.exports = BarberController;
