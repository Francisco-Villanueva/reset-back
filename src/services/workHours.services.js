const { WorkHours } = require("../db/models");

class WorkHoursServices {
  static async createWorkHours(barberId, data) {
    return await WorkHours.findOrCreate({
      where: { barberId },
      defaults: data,
    });
  }
  static async getWorkHours(id) {
    return await WorkHours.findByPk(id);
  }
  static async updateWorkHours(id, data) {
    return await WorkHours.update(data, {
      where: { barberId: id },
      returning: true,
    });
  }
}

module.exports = WorkHoursServices;
