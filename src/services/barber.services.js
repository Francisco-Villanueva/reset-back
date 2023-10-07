const { Barber, Appointment, WorkHours } = require("../models");

class BarberServices {
  static async getBarbers() {
    return await Barber.findAll({
      include: [{ model: Appointment }, { model: WorkHours }],
    });
  }
  static async getOneBarber(id) {
    return await Barber.findByPk(id);
  }
  static async createBarber(data) {
    return await Barber.create(data);
  }
}

module.exports = BarberServices;
