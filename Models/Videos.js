const mongoose  = require("mongoose")

const VideosSchema = new mongoose.Schema({
    title:{type:String,required:true},
    Url:{type:String,required:true},
    choice:{type:String,required:true},
    desc:{type:String,required:true}
},{timestamps:true})

module.exports = mongoose.model("Videos",VideosSchema)
