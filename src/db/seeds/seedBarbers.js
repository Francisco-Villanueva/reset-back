const db = require("..");
const { Barber, Turno } = require("../models");

async function seedData() {
  try {
    // Datos simulados de barberos
    const barbersData = [
      {
        barber_firstName: "Lautaro",
        barber_lastName: "Saralegui",
      },
      {
        barber_firstName: "Nahuel",
        barber_lastName: "Cantero",
      },
      {
        barber_firstName: "Francisco",
        barber_lastName: "Villanueva",
      },
      // Agrega más objetos de datos aquí si es necesario
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
