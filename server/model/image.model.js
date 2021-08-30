const mongoose = require("mongoose");


const ImageSchema = new mongoose.Schema({
            imgURL: {type:String}
    
},{timestamps: true});


module.exports = mongoose.model("Images", ImageSchema);