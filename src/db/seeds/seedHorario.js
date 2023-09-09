const db = require("..");
const { Horario } = require("../models");

async function seedData() {
  try {
    const horarios = [
      { horario_value: "09:00", horario_label: "09:00 HS" },
      { horario_value: "10:00", horario_label: "10:00 HS" },
      { horario_value: "11:00", horario_label: "11:00 HS" },
      { horario_value: "12:00", horario_label: "12:00 HS" },
      { horario_value: "13:00", horario_label: "13:00 HS" },
      { horario_value: "14:00", horario_label: "14:00 HS" },
      { horario_value: "15:00", horario_label: "15:00 HS" },
      { horario_value: "16:00", horario_label: "16:00 HS" },
      { horario_value: "17:00", horario_label: "17:00 HS" },
      { horario_value: "18:00", horario_label: "18:00 HS" },
      { horario_value: "19:00", horario_label: "19:00 HS" },
      { horario_value: "20:00", horario_label: "20:00 HS" },
    ];

    await Horario.bulkCreate(horarios);

    console.log("-----> Horarios Cargados !");

    await db.close();
  } catch (error) {
    console.log(error);
  }
}

seedData();
