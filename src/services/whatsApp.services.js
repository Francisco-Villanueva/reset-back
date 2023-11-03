const client = require("../repositories/whatsapper");
const qrcode = require("qrcode-terminal");

class WhatsAppServices {
  static async sendWhatsapp(numero, mensaje) {
    try {
      const chat = await client.getChatById("549" + numero + "@c.us");
      await chat.sendMessage(mensaje);

      return "mensaje enviado";
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  }

  static getQR() {
    return qrcode.generate();
  }
}
module.exports = WhatsAppServices;
