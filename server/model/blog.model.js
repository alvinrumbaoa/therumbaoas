const mongoose = require("mongoose");


const BlogSchema = new mongoose.Schema({
        title: {type: String},
        description: {type: String},
        content: {type: String},
        coverArt: {type: String}
        
},{timestamps: true});


module.exports = mongoose.model("Blogs", BlogSchema);