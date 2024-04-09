const { error } = require("qrcode-terminal");
const AuthServices = require("../services/auth.services");
const BarberServices = require("../services/barber.services");
const { hash, genSaltSync } = require("bcrypt");
const WorkHoursServices = require("../services/workhours.services");
require("dotenv").config();

class AuthControllers {
  static async login(req, res) {
    try {
      // console.log()
      const { userName, password } = req.body;
      const userToCheck = await AuthServices.checkUser(userName, password);
      console.log({userName, password})
      if (!userToCheck) return res.status(400).send("user not found!");

      const jwt = await AuthServices.generateJWT(userToCheck);
      res.status(201).send(jwt);
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

      const DEFAULT_HORUS =  [
        "10:00",
        "11:00",
        "12:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00"
      ]
      const newBarber = await BarberServices.createBarber(req.body);
      ["2","3","4","5","6"].forEach(async numberDay=>{
        await WorkHoursServices.create({
           barberId: newBarber.id,
           hours: DEFAULT_HORUS,
           numberDay
         })
       })
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
