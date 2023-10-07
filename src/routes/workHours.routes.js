const express = require("express");
const WorkHoursController = require("../controllers/workHours.controllers");
const router = express.Router();

router.get("/:id", WorkHoursController.getWorkHours);
router.put("/:id", WorkHoursController.updateWorkHours);
router.post("/", WorkHoursController.setWorkHours);

module.exports = router;
