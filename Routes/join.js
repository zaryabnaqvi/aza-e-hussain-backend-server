const router = require("express").Router()
const Join = require("../Models/Join")
router.post("/createJoin",async(req,res)=>{
    try{
        const join = new Join(req.body)
        const savedJoin = await join.save()
        res.status(200).json(savedJoin)
    }catch(err){
        res.status(500).json(err)
    }
})
router.delete("/deleteJoin/:id",async(req,res)=>{
    try{
        await Join.findByIdAndDelete(req.params.id)
        res.status(200).json("Join Deleted")
    }catch(err){
        res.status(500).json(err)
    }
})
router.get("/getJoin",async(req,res)=>{
    try{
        const join = await Join.find()
        res.status(200).json(join)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router