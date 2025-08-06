const express=require('express')
const User=require("./db")
const zod=require('zod');
const JWT_SECRET = require('../config');
const { authmiddleware } = require('../middleware');

const router= express.Router();

const signupSchema=zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.post('/signup',async(req,res)=>{
    const body=req.body;
    const {success}=signupSchema.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            message:"email already taken/incorrect credentials"
        })

        }

    const existingUser=await User.findOne({
        Username: req.body.Username
    })

    if(existingUser){
        return res.status(411).json({
            msg:"email already taken/ incorrect credentials"
        })
    }

    const user=await User.create({
        username: req.body.Username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    const userid=user_id;

    const token=jwt.sign({
        userid
    },JWT_SECRET);


    res.json({
        msg: "user created successfully:",
        token:token
    })

})

const signinSchema=zod.object({
    username: zod.string(),
    password: zod.string(),
})


router.post('/signin',async(req,res)=>{
    const body=req.body
    const {success}=signinSchema.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            msg:"invalid credentials"
        })
    }
    const user=await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(user){
        const token=jwt.sign({
            userid:user_id,
        },JWT_SECRET);
    }

    res.status(411).json({
        msg:"error while signin..."
    })


})

const updatebody=zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional()
})

router.put('/',authmiddleware,async(req,res)=>{
    const {success}=updatebody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            msg:"Error while updating information"
        })
    }

    await User.updateOne({_id:req.user_id},req.body)

    res.json({
        msg:"updated succesfully"
    })

})

module.exports=router;