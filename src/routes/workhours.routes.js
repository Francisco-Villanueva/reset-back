const express = require("express");
const WorkHoursController = require("../controllers/workhours.controllers");
const router = express.Router();

router.get("/", WorkHoursController.getAll);
router.post("/", WorkHoursController.createWorkHours);
router.put("/:barberId/:dayNumber", WorkHoursController.update);

module.exports = router;
