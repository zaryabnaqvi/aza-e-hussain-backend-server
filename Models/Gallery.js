const mongoose  = require("mongoose")

const GallerySchema = new mongoose.Schema({
    title:{type:String,required:true},
    Url:{type:String,required:true},
    choice:{type:String,required:true},
    desc:{type:String,required:true} 
},{timestamps:true})

module.exports = mongoose.model("Gallery", GallerySchema)