const { Barber, Turno, Day } = require("../../../db/models");

const newBarber = async () => {};
const getAllBarber = async (req, res) => {
  try {
    const allBarbers = await Barber.findAll({
      include: [
        {
          model: Turno,
          as: "barber_turno",
        },
      ],
    });

    res.status(200).json(allBarbers);
  } catch (error) {
    console.log(error);
  }
};
const getBarberById = async (req, res) => {
  try {
    const { id } = req.params;

    const barber = await Barber.findAll({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json(barber);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  newBarber,
  getAllBarber,
  getBarberById,
};
