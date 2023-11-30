const mainHours = require("../constants/hours");
const WorkHoursServices = require("../services/workhours.services");

class WorkHoursController {
  static async getAll(req, res) {
    try {
      const all = await WorkHoursServices.getAll();
      res.send(all);
    } catch (error) {}
  }
  static async getByDay(req, res) {
    try {
      const { dayNumber, barberId } = req.params;
      const getWorkDay = await WorkHoursServices.findByDay(dayNumber, barberId);

      if (!getWorkDay) {
        const response = mainHours.map((mainHour, position) => ({
          position,
          value: mainHour,
          avaliable: false,
        }));

        return res.send(response);
      }

      const response = mainHours.map((mainHour, position) => ({
        position,
        value: mainHour,
        avaliable: getWorkDay.hours.includes(mainHour),
      }));

      res.send(response);
    } catch (error) {
      console.log(error);
    }
  }
  static async createWorkHours(req, res) {
    try {
      const getWorkDay = await WorkHoursServices.findByDay(
        req.body.numberDay.toString(),
        req.body.barberId
      );
      if (getWorkDay) {
        return res.status(400).send("This day already exist!");
      }
      const new_WH = await WorkHoursServices.create(req.body);

      res.send(new_WH);
    } catch (error) {
      res.status(500);
      console.log(error);
    }
  }
  static async update(req, res) {
    try {
      const { dayNumber, barberId } = req.params;
      const { hours } = req.body;

      if (!hours) return res.status(400).send("Missing Data!");
      const getWorkDay = await WorkHoursServices.findByDay(dayNumber, barberId);

      if (!getWorkDay) {
        const newWorkDay = await WorkHoursServices.create({
          numberDay: dayNumber,
          barberId,
          hours,
        });
        return res.send(newWorkDay);
      }
      await getWorkDay.update({
        hours,
      });
      getWorkDay.save();

      res.send(getWorkDay);
    } catch (error) {
      res.status(500);
      console.log(error);
    }
  }
}

module.exports = WorkHoursController;
