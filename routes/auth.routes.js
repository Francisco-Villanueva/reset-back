const express = require("express");
const AuthControllers = require("../controllers/Auth.controllers");

const router = express.Router();

router.post("/login", AuthControllers.login);
router.post("/register", AuthControllers.register);
router.get("/barber/:barberId", AuthControllers.getUserInfo);
module.exports = router;
