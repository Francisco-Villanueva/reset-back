const jwt = require("jsonwebtoken");
const BarberServices = require("./barber.services");
const { compare } = require("bcrypt");
require("dotenv").config();
class AuthServices {
  static async checkUser(userName, password) {
    const userByUserName = await BarberServices.findBy("userName", userName);
    if (userByUserName) {
      const match = await compare(password, userByUserName.password);
      if (match) return userByUserName;
    }

    const userByEmail = await BarberServices.findBy("email", userName);
    if (userByEmail) {
      const match = await compare(password, userByEmail.password);
      if (match) return userByEmail;
    }

    return null;
  }
  static signJWT(payload, secret, expires) {
    return jwt.sign(payload, secret, { expiresIn: expires });
  }
  static async generateJWT(user) {
    const getUser = await BarberServices.getOneBarber(user.id);
    const payload = getUser.id;

    const userCopy = { ...user.dataValues, password: "" };
    return {
      accesToken: jwt.sign(payload, process.env.JWT_SECRET),
      user: userCopy,
    };
  }
}

module.exports = AuthServices;
