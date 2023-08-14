const mongoose  = require("mongoose")

const FeedBackSchema = new mongoose.Schema({
    salutation:{type:String,required:true},
    firstname:{type:String,required:true},

    lastname:{type:String,required:true},

    email:{type:String,required:true},

    subject:{type:String,required:true},
    description:{type:String,required:true}
},{timestamps:true})

module.exports = mongoose.model("FeedBack",FeedBackSchema)