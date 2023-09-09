const { Horario, Day, Turno, Barber } = require("../../db/models");

const test = async (req, res) => {
  try {
    res.send("USAR ESTA PARA TESTEAR UNA FUNCIONALIDAD");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
};
