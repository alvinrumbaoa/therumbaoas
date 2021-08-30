const mongoose = require("mongoose");


const CustomerSchema = new mongoose.Schema({
        name: {type: String,
                required: [true, "Name Requied"],
                minLenght: [3, "characters should be at least 3 or more"]
        
        },
        email: {type: String ,
                required: [true, 'Email address required'],
                match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        phone: {type: String,
                required: [true, 'Customer  phone number required'],
                minLemght: [10, "phone number should be more than 10"]
        },
        message: {type: String,
                required: [true, "Please leave a detailed message"],
                minLenght :[3, "characters should be at least 3 or more"]
        },
        theme: {type: String, 
                enum: ["Wedding","Newborn","Birthdays","Events","Modeling"],
                required: [true, "Theme is Required"],
                minLenght :[3, "characters should be at least 3 or more"]
        }
},{timestamps: true});


module.exports = mongoose.model("Customer", CustomerSchema);