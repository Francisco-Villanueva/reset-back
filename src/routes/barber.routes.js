const express = require("express");
const BarberController = require("../controllers/barber.controllers");
const router = express.Router();

router.get("/", BarberController.getAllBarber);
router.post("/", BarberController.newBarber);
router.get("/:id", BarberController.getBarberById);

module.exports = router;
