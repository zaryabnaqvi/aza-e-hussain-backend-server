const mongoose  = require("mongoose")

const TeamSchema = new mongoose.Schema({
    country:{type:String,required:true},
    city:{type:String,required:true},
    town:{type:String,required:true},
    members:{type:String,required:true},
    mapcoordinates:{type:String,required:true},
    url:{type:String,required:true},


},{timestamps:true})

module.exports = mongoose.model("Teams",TeamSchema)