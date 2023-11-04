const { AppointMentSlots } = require("../models");

class AvliableHoursService {
  static async getAllSlots() {
    return await AppointMentSlots.findAll();
  }

  static async getSlotsByDateAndBarber(date, barberId) {
    return await AppointMentSlots.findAll({
      where: { date, barberId },
    });
  }
}

module.exports = AvliableHoursService;
