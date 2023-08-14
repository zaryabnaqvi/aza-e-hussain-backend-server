const router = require("express").Router()
const bcrypt =require ("bcryptjs")
const Admin = require("../Models/Admin")
router.post("/signup",async(req,res)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const user = new Admin({...req.body,password:hash})
        const saveduser = await user.save()
        res.status(200).json(saveduser)
    }catch(err){
        res.status(500).json(err)
    }
})
router.post("/signin",async(req,res)=>{
    try{
    const user = await Admin.findOne({username:req.body.username})
    if (user){
        const checkpassword =  bcrypt.compareSync(req.body.password,user.password)
        if(checkpassword){
            const {password,...other} = user._doc
            res.status(200).json({...other})
        }
        else{
            res.status(401).json("password")
        }
    }
    else{
        res.status(401).json("username")
    }
}catch(err){
    console.log(err)
}
})

module.exports = router