const router = require("express").Router()
const Gallery = require("../Models/Gallery")
router.post("/creategallery",async(req,res)=>{
    try{
        const gallery = new Gallery(req.body)
        const savedgallery = await gallery.save()
        res.status(200).json(savedgallery)
    }catch(err){
        res.status(500).json(err)
    }
})
router.delete("/deletegallery/:id",async(req,res)=>{
    try{
        await Gallery.findByIdAndDelete(req.params.id)
        res.status(200).json("gallery Deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

router.put("/Updategallery/:id",async(req,res)=>{
    const{title,Url,choice,desc}=req.body;
    const newGallery ={}
    if(title){newGallery.title=title}
    if(Url){newGallery.Url=Url}
    if(choice){newGallery.choice=choice}
    if(desc){newGallery.desc=desc}
     
 
    let gallery = await Gallery.findById(req.params.id)
 
    gallery=await Gallery.findByIdAndUpdate(req.params.id,{$set:newGallery},{new:true})
    res.json(gallery)
 })


router.get("/getgallery",async(req,res)=>{
    try{
        const gallery = await Gallery.find()
        res.status(200).json(gallery)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router