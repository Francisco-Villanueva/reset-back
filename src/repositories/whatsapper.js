const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  if (message.body === "!ping") {
    message.reply("pong");
  }
});

// client.initialize();

// Función para enviar un mensaje por WhatsApp
async function enviarMensaje(numero, mensaje) {
  try {
    console.log({ numero }, "\n", { mensaje });
    // await client.waitForReady();
    const chat = await client.getChatById(numero + "@c.us");
    await chat.sendMessage(mensaje);

    console.log("MENSAJE ENVIADO!");
    return "mensaje enviado";
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
  }
}

// client.initialize();

module.exports = {
  enviarMensaje,
  client,
};
