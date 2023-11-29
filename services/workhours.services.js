const { WorkHours } = require("../models");

class WorkHoursServices {
  static async getAll() {
    return await WorkHours.findAll();
  }

  static async create(data) {
    return await WorkHours.create(data);
  }
  static async findByDay(numberDay, barberId) {
    return await WorkHours.findOne({
      where: {
        numberDay,
        barberId,
      },
    });
  }
  static async update(numberDay, hours) {
    return await WorkHours.update(
      { hours },
      {
        where: {
          numberDay,
        },
      }
    );
  }
}

module.exports = WorkHoursServices;
