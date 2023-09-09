const { Barber, Turno, Day, Horario } = require("../../../db/models");
// const { enviarMensaje } = require("../../utils/whatsapper");
const { enviarCorreo } = require("../../utils/mailer");

const newTurno = async (req, res) => {
  try {
    const { client_name, client_email, client_number, time, date, barberId } =
      req.body;

    console.log({ ...req.body });

    const dateToFormate = new Date(date);
    const year = dateToFormate.getUTCFullYear();
    const month = dateToFormate.getUTCMonth() + 1; // Sumar 1 porque los meses se indexan desde 0
    const day = dateToFormate.getUTCDate();
    const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;

    // console.log("DATE: ", formattedDate);

    // //CREO o ENCUENTRO UN DIA EN LA TABLA 'Days' SEGUN SI YA EXISTE O NO UN TURNO ESE DIA:
    const [turnoDay, isNewDay] = await Day.findOrCreate({
      where: {
        day_date: formattedDate,
      },
    });

    /*PARA VER QUE SI TENGO QUE  VERIFICAR COLISION DE TURNOS, ME FIJO SI EL DIA ES NUEVO */
    const turnoToCreate = {
      client_name,
      client_email,
      client_number,
      time,
      date,
      barberId,
      dayId: turnoDay.id,
      isBooked: true,
    };

    await Horario.update(
      {
        dayId: turnoDay.id,
        barberId,
      },
      {
        where: {
          horario_value: time,
        },
      }
    );

    const newTurno = await Turno.create(turnoToCreate);

    // // if (newTurno) {
    // //   const wpMessage = `ℹ️ *INFORMACION DE SU TURNO:*\n\n 🙋🏽‍♂️| ${client_name}\n🗓️| ${date} \n🕐| ${time}  \n💇🏽‍♂️| ${barber.barber_firstName} ${barber.barber_lastName}`;
    // // await enviarMensaje(number, wpMessage);
    // // const number = "549" + client_number;

    enviarCorreo({ email: client_email, date, time });
    res.status(201).json(newTurno);
  } catch (error) {
    console.log(error);
  }
};
const deleteTurno = async (req, res) => {
  try {
    const { id } = req.params;

    await Turno.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send("Turno eliminado!");
  } catch (error) {
    console.log(error);
  }
};
const getAllTurnos = async (req, res) => {
  try {
    const turnos = await Turno.findAll();

    res.status(200).json(turnos);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  newTurno,
  getAllTurnos,
  deleteTurno,
};
