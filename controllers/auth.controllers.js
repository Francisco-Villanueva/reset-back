const { error } = require("qrcode-terminal");
const AuthServices = require("../services/auth.services");
const BarberServices = require("../services/barber.services");
const { hash, genSaltSync } = require("bcrypt");
require("dotenv").config();

class AuthControllers {
  static async login(req, res) {
    try {
      const { userName, password } = req.body;
      const userToCheck = await AuthServices.checkUser(userName, password);
      if (!userToCheck) return res.status(400).send("user not found!");

      const jwt = await AuthServices.generateJWT(userToCheck);
      res.send(jwt);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async register(req, res) {
    try {
      req.body.password = await hash(
        req.body.password,
        parseInt(process.env.HASH_SALT)
      );

      const newBarber = await BarberServices.createBarber(req.body);

      res.send(newBarber);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getUserInfo(req, res) {
    try {
      const user = await BarberServices.getOneBarber(req.params.barberId);

      if (!user) return res.status(400).send("User Not found!");

      const USER_RESPONSE = { ...user.dataValues, password: null };

      res.status(200).json(USER_RESPONSE);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = AuthControllers;
