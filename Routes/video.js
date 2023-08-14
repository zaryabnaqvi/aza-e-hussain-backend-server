const router = require("express").Router()
const Videos = require("../Models/Videos")
router.post("/createvideos",async(req,res)=>{
    try{
        const videos = new Videos(req.body)
        const savedvideo = await videos.save()
        res.status(200).json(savedvideo)
    }catch(err){
        res.status(500).json(err)
    }
})

router.delete("/deletevideos/:id",async(req,res)=>{
    try{
        await Videos.findByIdAndDelete(req.params.id)
        res.status(200).json("video Deleted")
    }catch(err){
        res.status(500).json(err)
    }
})



router.put("/UpdateVideos/:id",async(req,res)=>{
    const{title,Url,choice,desc}=req.body;
    const newVideos ={}
    if(title){newVideos.title=title}
    if(Url){newVideos.Url=Url}
    if(choice){newVideos.choice=choice}
    if(desc){newVideos.desc=desc}
     
 
    let video = await Videos.findById(req.params.id)
 
    video=await Videos.findByIdAndUpdate(req.params.id,{$set:newVideos},{new:true})
    res.json(video)
 })

router.get("/getvideos",async(req,res)=>{
    try{
        const news = await Videos.find()
        res.status(200).json(news)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router