const { Horario, Day, Turno, Barber } = require("../../../db/models");

const getHorarios = async (req, res) => {
  try {
    // const day = "2023-08-23";
    // const barber_id = 2;

    const { barber_id, day } = req.params;

    const allHorarios = await Horario.findAll();

    const especific_day = await Day.findAll({
      where: { day_date: day },
      include: [
        {
          model: Horario,
          as: "day_horario",
          where: {
            barberId: barber_id,
          },
        },
      ],
    });

    if (!especific_day.length) {
      return res.status(200).json(allHorarios);
    }

    const horarios_ocupados = especific_day[0].day_horario.map((m) => m.id);
    const getHorarios_filtrados = allHorarios
      .filter((m) => !horarios_ocupados.includes(m.id))
      .sort((a, b) => a.id - b.id);

    res.status(200).json(getHorarios_filtrados);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHorarios,
};
