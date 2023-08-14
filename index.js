const express = require("express")

const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const AdminRoute = require("./Routes/auth")
const VideoRoute = require("./Routes/video")
const GalleryRoute = require("./Routes/gallery")
const JoinRoute = require("./Routes/join")

// const TestRoute = require("./Routes/test")
const FeedBackRoute = require("./Routes/feedback")
const cors = require("cors")
dotenv.config()
const app = express()
// app.use(express.json())


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({
    origin: '*',
    methods:["GET","POST","PUT","DELETE"]
}))
const connect = ()=>{
    mongoose.connect(process.env.MONGOURL).
    then(()=>console.log("Db Connection Successfull"))
    .catch((err)=>{
        throw err
    })
}
connect()
app.use("/api/feedback",FeedBackRoute)
 app.use("/api/join",JoinRoute)
app.use("/api/gallery",GalleryRoute)
app.use("/api/videos",VideoRoute)
app.use("/api/auth",AdminRoute)



app.get('/',(req,res)=>{
    res.send("zaryab")
})
app.listen(8000,()=>{
    
    console.log(`Server Started at Port 8000`)
})
