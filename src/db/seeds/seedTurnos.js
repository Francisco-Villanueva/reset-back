const db = require("../index");
const { Barber, Turno } = require("../models");

async function seedData() {
  try {
    const turnosData = [
      {
        client_name: "Cliente 1",
        client_email: "cliente1@example.com",
        client_number: 1234567890,
        time: "10:00 AM",
        date: new Date("2023-08-21"),
        barberId: 1,
      },
      {
        client_name: "Cliente 2",
        client_email: "cliente2@example.com",
        client_number: 9876543210,
        time: "2:00 PM",
        date: new Date("2023-08-22"),
        barberId: 2,
      },
      // Agrega más objetos de datos de turnos aquí si es necesario
    ];

    // Crea los registros de turnos en la base de datos
    await Turno.bulkCreate(turnosData);

    await db.close();

    console.log(" ----->  TURNOS CARGADOS!!!.");
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
}

// Llama a la función para cargar los datos
seedData();
