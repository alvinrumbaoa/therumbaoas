const mongoose = require("mongoose");
const dbName = "photoDB";

mongoose.connect("mongodb+srv://xenofy:Senpou_23@photodb.useel.mongodb.net/photoDb?retryWrites=true&w=majority",
{ 
        useNewUrlParser: true,
        useUnifiedTopology: true

})
        .then(() => console.log("Established connection with "+ dbName))
        .catch(err => console.log("Something wrong when connecting with " +dbName));