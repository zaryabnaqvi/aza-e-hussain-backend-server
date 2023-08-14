const router =  require("express").Router()
const FeedBack =  require("../Models/FeedBack")
router.post("/createfeedback",async(req,res)=>{
    try{
        const feedback = new FeedBack(req.body)
        const savefaq = await feedback.save()
        res.status(200).json(savefaq)
    }catch(err){
        res.status(500).json(err)
    }
})
router.delete("/deletefeedback/:id",async(req,res)=>{
    try{
        await FeedBack.findByIdAndDelete(req.params.id)
        res.status(200).json("Feedback Deleted")
    }catch(err){
        res.status(500).json(err)
    }
})
router.get("/getfeedback",async(req,res)=>{
    try{
        const feedback = await FeedBack.find()
        res.status(200).json(feedback)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router