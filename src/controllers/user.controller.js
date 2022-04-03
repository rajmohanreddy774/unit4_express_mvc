const express=require("express")

const User=require("../models/user.model")


const router=express.Router();


router.post("",async(req,res)=>{
    try{
const user=await User.create(req.body)
return res.status(201).send(user)

    }catch(error)
{
return res.status(500).send({message:error.message})
}});

router.get("",async(req,res)=>{
    try{
        const user=await User.find().lean().exec()
        return res.status(201).send(user)
        
            }catch(error)
        {
        return res.status(500).send({message:error.message})
        }
});

module.exports=router;
