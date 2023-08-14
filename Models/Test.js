const mongoose  = require("mongoose")

const TestSchema = new mongoose.Schema({
    name:{type:String,default:"TEST"},
    mock:[
        {
            title:{type:String,required:true},
            link:{type:String,required:true}
        }
    ],
    math:[
        {
            title:{type:String,required:true},
            link:{type:String,required:true}
        }
    ],
    physics:[
        {
            title:{type:String,required:true},
            link:{type:String,required:true}
        }
    ],
    chemistry:[
        {
            title:{type:String,required:true},
            link:{type:String,required:true}
        }
    ]
})

module.exports = mongoose.model("Test",TestSchema)