const { WorkHours } = require("../models");

class WorkHoursServices {
  static async createWorkHours(barberId, data) {
    return await WorkHours.findOrCreate({
      where: { barberId },
      defaults: data,
    });
  }
  static async getWorkHours(barberId) {
    return await WorkHours.findOne({ where: { barberId } });
  }
  static async updateWorkHours(id, data) {
    return await WorkHours.update(data, {
      where: { barberId: id },
      returning: true,
    });
  }
}

module.exports = WorkHoursServices;
