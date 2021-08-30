const Customers = require("../model/customer.model");

module.exports.getAllCustomers = (req, res)  => {
    console.log("get all Customers");
    
        Customers.find({ })
            .then((allCustomers) =>{
                    console.log(allCustomers);
                    res.json(allCustomers);
            })
            .catch((err) => {
                    console.log(err);
                    res.json(err);
            });
    };
    
    module.exports.createCustomers =(req, res) =>{
        console.log(require);
        Customers.create(req.body)
            .then((newCustomers) => { 
                    console.log(newCustomers);
                    res.json(newCustomers);
            })
            .catch((err) =>{
                console.log(err);
                res.json(err);
            })
    }

    module.exports.getOneCustomer= (req, res) => {
        console.log("inside getOneCustomer");
        console.log(req.params.id);
    
        Customers.findById(req.params.id)
            .then((oneCustomer) => {
                console.log(oneCustomer);
                res.json(oneCustomer);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };


    module.exports.updateCustomers = (req, res) => {
        console.log("inside updateCustomers");
        console.log(req.params.id);  // the document we need to update
        console.log(req.body);       // the data we will be updating with

        Customers.findByIdAndUpdate(req.params.id, req.body, {
            new: true,    // return the updated document instead of the original
            runValidators: true  // validate the json data just like the create
        })
            .then((updatedCustomer) => {
                console.log(updatedCustomer);
                res.json(updatedCustomer);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    
    // delete Customers
    module.exports.deleteCustomers = (req, res) => {
        console.log("inside deleteCustomers");
        console.log(req.params.id);
    
        Customers.findByIdAndDelete(req.params.id)
            .then((deletedCustomers) => {
                // this is the deleted document....your last chance!!!
                console.log(deletedCustomers);
                res.json(deletedCustomers);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    