const mongoose = require("mongoose");
userschema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email: String,
    password :{type:String,unique:true}
})
const userModel = mongoose.model("user",userschema);

module.exports = userModel;