const WorkHoursServices = require("../services/workHours.services");
const { generateTimeSlotsByHour } = require("../utils/setSlotsHours");

class WorkHoursController {
  static async setWorkHours(req, res) {
    try {
      const hours = generateTimeSlotsByHour(
        req.body.start_time,
        req.body.end_time
      );

      const [barber, newHours] = await WorkHoursServices.createWorkHours(
        req.body.barberId,
        {
          ...req.body,
          hours: hours,
        }
      );

      res.status(200).json(barber);
    } catch (error) {
      res.status(500);

      console.log(error);
    }
  }
  static async getWorkHours(req, res) {
    try {
      const barberWorkHours = await WorkHoursServices.getWorkHours(
        req.params.id
      );

      res.status(200).json(barberWorkHours);
    } catch (error) {
      res.status(500);

      console.log(error);
    }
  }

  static async updateWorkHours(req, res) {
    try {
      const hours = generateTimeSlotsByHour(
        req.body.start_time,
        req.body.end_time
      );

      const [numberChange, barberData] =
        await WorkHoursServices.updateWorkHours(req.params.id, {
          ...req.body,
          hours,
        });

      res.status(200).json({
        msg: `Barber hours updated succesfully!`,
        barberData: barberData[0],
      });
    } catch (error) {
      res.status(500);

      console.log(error);
    }
  }
}

module.exports = WorkHoursController;
