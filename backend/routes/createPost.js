const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const requireLogin = require("../middlewares/requireLogin");
const POST =mongoose.model("POST");


router.get("/allposts",requireLogin,(req,res)=>{
    POST.find()
    .populate("postedBy","_id name")
    .then(posts=>res.json(posts))
    .catch(err=>console.log(err))
})
router.post("/createPost",requireLogin,(req,res)=>{
    const {body,pic}=req.body;
    console.log(pic)
    if(!body||!pic){
        return res.status(422).json({error:"Please add all the fields"})
    }
    console.log(req.user)
    const post=new POST({
        // title,
        body,
        photo:pic,
        postedBy:req.user
    })
    post.save().then((result)=>{
        return res.json({post:result})
    }).catch(err=>console.log(err))
    // res.json("ok");
})
router.get("/myposts",requireLogin,(req,res)=>{
    console.log(req.user)
})
module.exports=router