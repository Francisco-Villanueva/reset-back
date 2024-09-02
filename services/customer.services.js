const { Customer } = require("../models");

class CustomerServices {
  static async getAllCustomers() {
    return await Customer.findAll();
  }

  static async getCustomerById(id) {
    return await Customer.findOne({ where: { id } });
  }

  static async getCustomerByEmail(email) {
    return await Customer.findOne({ where: { email } });
  }

  static async createCustomer(data) {
    return await Customer.create(data);
  }

  static async updateCustomer(id, data) {
    return await Customer.update(data, { where: { id } });
  }

  static async deleteCustomer(id) {
    return await Customer.destroy({ where: { id } });
  }
}

module.exports = CustomerServices;
