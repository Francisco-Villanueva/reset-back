const WhatsAppServices = require("../services/whatsApp.services");

class BarberController {
  static async getQR(req, res) {
    try {
      const qr = WhatsAppServices.getQR();

      res.status(200).send(qr);
    } catch (error) {
      res.status(500);

      console.log(error);
    }
  }
}

module.exports = BarberController;
