const express = require("express");
const WhatsAppController = require("../controllers/whatsapp.controllers");

const router = express.Router();
router.get("/qr", WhatsAppController.getQR);

module.exports = router;
