const { compare } = require("bcrypt");
const { Barber, Appointment, WorkHours } = require("../models");
const { where } = require("sequelize");

class BarberServices {
  static async getBarbers() {
    return await Barber.findAll({
      include: [{ model: Appointment }, { model: WorkHours }],
    });
  }
  static async getActiveBarbers() {
    return await Barber.findAll(
      {
        where: [
          {
            isAdmin: false,
          },
          {
            status: ["active"],
          },
        ],
      },
      {
        include: [{ model: Appointment }, { model: WorkHours }],
      }
    );
  }
  static async findBy(key, value) {
    return await Barber.findOne({ where: { [key]: value } });
  }
  static async checkUser(userName, password) {
    const userByUserName = await this.findBy("userName", userName);
    if (userByUserName) {
      const match = await compare(password, userByUserName.password);
      if (match) return userByUserName;
    }

    const userByEmail = await this.findBy("email", userName);
    if (userByEmail) {
      const match = await compare(password, userByEmail.password);
      if (match) return userByEmail;
    }

    return null;
  }
  static async getOneBarber(id) {
    return await Barber.findOne({
      where: { id },
      include: [{ model: Appointment }, { model: WorkHours }],
    });
  }
  static async createBarber(data) {
    return await Barber.create(data);
  }
  static async updateBarberHours(id, data) {
    return await Barber.update(data, { where: { id } });
  }
  static async destroyBarber(id) {
    return await Barber.destroy({ where: { id } });
  }
}

module.exports = BarberServices;
