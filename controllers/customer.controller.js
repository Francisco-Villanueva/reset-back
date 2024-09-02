const CustomerServices = require("../services/customer.services");

class CustomerController {
    static async getAllCustomers(req, res) {
      try {
        const allBarbers = await CustomerServices.getAllCustomers();
  
        res.status(200).json(allBarbers.filter((barber) => !barber.isAdmin));
      } catch (error) {
        res.status(500);
        console.log(error);
      }
    }

    static async getCustomerById(req, res) {
      try {
        const { id } = req.params;
  
        const barber = await CustomerServices.getCustomerById(id);
  
        res.status(200).json(barber);
      } catch (error) {
        console.log(error);
      }
    }


    static async createCustomer(req, res) {
      try {
        const { name, lastName, phone, email } = req.body;
        if (!name || !lastName || !phone || !email) {
          return res.status(400).send("Missing required fields!");
        }

        const existingCustomer = await CustomerServices.getCustomerByEmail(email);
        if (existingCustomer) {
          return res.status(409).send("Email already registered!");
        }

        const barber = await CustomerServices.createCustomer(req.body);

        res.status(201).json(barber);
      } catch (error) {
        res.status(500);
        console.log(error);
      }
    }
    static async updateCustomer(req, res) {
      try {
        const { id } = req.params;
        const { name, lastName, phone, email } = req.body;
        if (!name || !lastName || !phone || !email) {
          return res.status(400).send("Missing required fields!");
        }

        const updatedBarber = await CustomerServices.updateCustomer(
          id,
          req.body
        );
        res.status(200).json(updatedBarber);
      } catch (error) {
        console.log(error);
      }
    }
    static async deleteCustomer(req, res) {
      try {
        const barber = await CustomerServices.getCustomerById(req.params.id);
  
        if (!barber) {
          return res.status(401).send("Customer not found!");
        }
  
        const customerDelete = await CustomerServices.deleteCustomer(req.params.id);
  
        res.status(200).json({ msg: "Customer Deleted!", customerDelete });
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  module.exports = CustomerController;