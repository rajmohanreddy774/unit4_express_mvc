const express=require("express")

const Submission=require("../models/submission.model")

const router=express.Router();

router.post("",async(req,res)=>{
    try{
const submission=await Submission.create(req.body)
return res.status(201).send(submission)

    }catch(error)
{
return res.status(500).send({message:error.message})
}});

router.get("",async(req,res)=>{
    try{
        const submission=await Submission.find().
        populate({path:"_id"}).
        lean().exec();
        return res.status(201).send(submission)
        
            }catch(error)
        {
        return res.status(500).send({message:error.message})
        }
});



module.exports=router;
