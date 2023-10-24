const qrcode = require("qrcode-terminal");
const fs = require("fs");
const { Client, LegacySessionAuth } = require("whatsapp-web.js");

const client = new Client({});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", async () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  console.log(message.body);
});

// client.initialize();
module.exports = client;
