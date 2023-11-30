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
      const { name, lastName } = req.body;

      if (!name || !lastName) {
        return res.status(401).send("Faltan datos!");
      }

      const newBarber = await BarberServices.createBarber(req.body);

      res.status(200).json({ newBarber });
    } catch (error) {
      res.status(500);
      console.log(error);
    }
  }

  static async updateBarber(req, res) {
    try {
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
