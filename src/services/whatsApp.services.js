const client = require("../repositories/whatsapper");

class WhatsAppServices {
  static async sendWhatsapp(numero, mensaje) {
    try {
      const chat = await client.getChatById("549" + numero + "@c.us");
      await chat.sendMessage(mensaje);

      console.log("MENSAJE ENVIADO!");
      return "mensaje enviado";
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  }
}
module.exports = WhatsAppServices;
