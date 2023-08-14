const Test = require("../Models/Test")

const router = require("express").Router()

router.post("/createitem",(req,res)=>{
    try{
        const item = new Test(req.body)
        const save = item.save()
        res.status(200).json(save)
    }catch(err){
        res.status(500).json(err)
    }
})
router.put("/createtest/:type",async(req,res)=>{
    try{
        await Test.findByIdAndUpdate("6432acd7a1a5a8eae6b7578d",{
            $push:{[req.params.type]:req.body}
        })
        res.status(200).json(`Test Added to ${req.params.type}`)
    }catch(err){
        res.status(500).json(err)
    }
})
router.put("/deletetest/:type/:testid",async(req,res)=>{
    try{
        await Test.findByIdAndUpdate("6432acd7a1a5a8eae6b7578d",{
            $pull:{[req.params.type]:{_id:req.params.testid}}
        })
        res.status(200).json(`Test Deleted from ${req.params.type}`)
    }catch(err){
        res.status(500).json(err)
    }
})
router.get("/gettest",async(req,res)=>{
    try{
        const test = await Test.find()
        res.status(200).json(test)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router