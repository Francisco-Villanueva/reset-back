const db = require("..");
const { Barber } = require("../models");

async function seedData() {
  try {
    // Datos simulados de barberos
    const barbersData = [
      {
        name: "Lautaro",
        lastName: "Saralegui",
      },
      {
        name: "Nahuel",
        lastName: "Cantero",
      },
    ];

    // Crea los registros de barberos en la base de datos
    await Barber.bulkCreate(barbersData);

    console.log(" ----->  BARBEROS CARGADOS!!!.");
    await db.close();
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
}

// Llama a la función para cargar los datos
seedData();
