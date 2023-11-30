const express = require("express");
const BarberController = require("../controllers/barber.controllers");
const router = express.Router();

router.get("/", BarberController.getAllBarber);
router.post("/", BarberController.newBarber);
router.get("/:id", BarberController.getBarberById);
router.put("/:id", BarberController.updateBarber);
router.delete("/:id", BarberController.deleteBarber);

module.exports = router;
