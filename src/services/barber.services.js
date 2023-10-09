const { Barber, Appointment, WorkHours } = require("../models");

class BarberServices {
  static async getBarbers() {
    return await Barber.findAll({
      include: [{ model: Appointment }],
    });
  }
  static async getOneBarber(id) {
    return await Barber.findByPk(id);
  }
  static async createBarber(data) {
    return await Barber.create(data);
  }
  static async updateBarberHours(id, data) {
    return await Barber.update(data, { where: { id } });
  }
  static async destroyBarber(id) {
    return await Barber.destroy({ where: { id } });
  }
}

module.exports = BarberServices;
