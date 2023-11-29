const AvliableHoursService = require("../services/avaliableHours.services");
const BarberServices = require("../services/barber.services");
const WorkHoursServices = require("../services/workhours.services");

class AvliableHoursController {
  static async getAllSlots(req, res, next) {
    try {
      const slots = await AvliableHoursService.getAllSlots();

      res.status(200).json(slots);
    } catch (error) {
      next(error);
    }
  }

  static async getSlotsByDay(req, res, next) {
    try {
      const { barberId, date } = req.params;

      const formatDate = new Date(date).getDay().toString();
      const slots = await AvliableHoursService.getSlotsByDateAndBarber(
        date,
        barberId
      );
      const oneBarber = await BarberServices.getOneBarber(barberId);

      const workDay = await WorkHoursServices.findByDay(
        formatDate,
        oneBarber.id
      );

      const bussySlots = slots
        .filter((slot) => !slot.avaliable)
        .map((slot) => slot.time);

      const slotsDay = workDay?.hours.map((hs) => ({
        hs: hs,
        avaliable: !bussySlots.includes(hs),
      }));

      res.status(200).json(slotsDay);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AvliableHoursController;
