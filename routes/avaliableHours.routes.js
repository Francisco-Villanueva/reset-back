const express = require("express");
const AvliableHoursController = require("../controllers/avaliableHours.controllers");

const router = express.Router();
router.get("/:barberId/:date", AvliableHoursController.getSlotsByDay);
router.get("/slots", AvliableHoursController.getAllSlots);

module.exports = router;
