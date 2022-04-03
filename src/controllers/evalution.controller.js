const express=require("express")

const Evaluation =require("../models/evalution.model")


const router=express.Router();

router.post("",async(req,res)=>{
    try{
const eval=await Evaluation.create(req.body)
return res.status(201).send(eval)

    }catch(error)
{
return res.status(500).send({message:error.message})
}});

router.get("",async(req,res)=>{
    try{
        const eval=await Evaluation.find().lean().exec()
        return res.status(201).send(eval)
        
            }catch(error)
        {
        return res.status(500).send({message:error.message})
        }
});

router.get("/:id",async(req,res)=>{
    try{
        const eval=await Evaluation.findById(req.params.id).lean().exec()
        return res.status(201).send(eval)
        
            }catch(erroror)
        {
        return res.status(500).send({message:error.message})
        }
});



module.exports=router;