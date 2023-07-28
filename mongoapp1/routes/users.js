var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/app1");

var userSchema = mongoose.Schema({
    email: String,
    fullname: String,
    profile: String,
    likes: {
        type:Number,
        default:0,
    }
})

module.exports = mongoose.model("user",userSchema)