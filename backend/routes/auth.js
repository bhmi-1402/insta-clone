const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const USER =mongoose.model("USER");

const bcrypt=require('bcrypt')

router.get('/',(req,res)=>{
    res.send("hello")
})
router.post("/signup",(req,res)=>{
    // res.json(req.body.name);
    const {name,userName,email,password}=req.body;
    if(!name||!email||!userName||!password){
        res.status(422).json({error:"Please add all the fields"})
    }
    bcrypt.hash(password,)
    USER.findOne({$or:[{email:email},{username:userName}]}).then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user already exist with that email"})
        }
        const user=new USER({
            name,
            email,
            userName,
            password
        })
        user.save()
        .then(user => {res.json({message:"saved"})})
        .catch(err => {console.log(err)})
    })
    
})
module.exports=router;