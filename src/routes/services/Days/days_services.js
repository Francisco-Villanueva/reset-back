const { Day, Turno, Horario } = require("../../../db/models");

const getAllDays = async (req, res) => {
  try {
    const allDays = await Day.findAll({
      include: [
        {
          model: Horario,
          as: "day_horario",
        },
        {
          model: Turno,
          as: "day_turno",
        },
      ],
    });

    // const response = allDays.filter((e) => e.day_date === day);

    res.status(200).json(allDays);
  } catch (error) {
    console.log(error);
  }
};

const getDays_byBarber = async (req, res) => {
  try {
    const { barber_id } = req.params;

    const allDays = await Day.findAll({
      include: [
        // {
        //   model: Horario,
        //   as: "day_horario",
        //   where: {
        //     barberId: barber_id,
        //   },
        // },
        {
          model: Turno,
          as: "day_turno",
          where: {
            barberId: barber_id,
          },
        },
      ],
    });

    res.status(200).json(allDays);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllDays,
  getDays_byBarber,
};
