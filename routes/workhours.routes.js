const express = require("express");
const WorkHoursController = require("../controllers/workhours.controllers");
const router = express.Router();

router.get("/", WorkHoursController.getAll);
router.post("/", WorkHoursController.createWorkHours);
router.get("/:barberId/:dayNumber", WorkHoursController.getByDay);
router.put("/:barberId/:dayNumber", WorkHoursController.update);

module.exports = router;
