const router = require("express").Router()
const Team = require("../Models/Teams")
router.post("/createTeam",async(req,res)=>{
    try{
        const team = new Team(req.body)
        const savedTeam = await team.save()
        res.status(200).json(savedTeam)
    }catch(err){
        res.status(500).json(err)
    }
})
router.delete("/deleteTeam/:id",async(req,res)=>{
    try{
        await Team.findByIdAndDelete(req.params.id)
        res.status(200).json("Team Deleted")
    }catch(err){
        res.status(500).json(err)
    } 
})

router.put("/UpdateTeam/:id",async(req,res)=>{
    const{ country, city,town,members, mapcoordinates,url}=req.body;
    const newTeam ={}
    if(country){newTeam.country=country}
    if(url){newTeam.url=url}
    if(city){newTeam.city=city}
    if(town){newTeam.town=town}
    if(members){newTeam.members=members} 
    if(mapcoordinates){newTeam.mapcoordinates=mapcoordinates}


   


    let team = await Team.findById(req.params.id)
 
    team=await Team.findByIdAndUpdate(req.params.id,{$set:newTeam},{new:true})
    res.json(team)
 })


router.get("/getTeam",async(req,res)=>{
    try{
        const team = await Team.find()
        res.status(200).json(team)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router