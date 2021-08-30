const CustomersController = require('../controller/customer.controller');

module.exports = function(app) {
	// get all customers
	app.get("/api/customers", CustomersController.getAllCustomers);
	// create Customers
	app.post("/api/customers", CustomersController.createCustomers);
	// get one Customers
	// create a param variable called "id"
	app.get("/api/customers/:id", CustomersController.getOneCustomer);
	// update Customers
	app.put("/api/customers/:id", CustomersController.updateCustomers);
	// delete Customers
	app.delete("/api/customers/:id",  CustomersController.deleteCustomers);
}
