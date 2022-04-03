const express=require("express")

const Batch=require("../models/batch.model")


const router=express.Router();

router.post("",async(req,res)=>{
    try{
const batch=await Batch.create(req.body)
return res.status(201).send(batch)

    }catch(error)
{
return res.status(500).send({message:error.message})
}});

router.get("",async(req,res)=>{
    try{
        const batch=await Batch.find().lean().exec()
        return res.status(201).send(batch)
        
            }catch(error)
        {
        return res.status(500).send({message:error.message})
        }
});

module.exports=router;