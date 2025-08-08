const express=require('express')
const router= express.Router();
const zod=require('zod');
const { User, Account } = require("../db");
const {JWT_SECRET}=require("../config")
const jwt = require('jsonwebtoken');
const  { authMiddleware } = require("../middleware");



const signupSchema=zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.post("/signup",async(req,res)=>{
    const body=req.body;
    const {success}=signupSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message:"email already taken/incorrect credentials"
        })
    }

    const existingUser=await User.findOne({
        username: req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            msg:"email already taken/ incorrect credentials"
        })
    }

    const user=await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    const userId=user._id;

    await Account.create({
        userId,
        balance: 1+Math.random()*10000
    })

    const token=jwt.sign({userId: user._id},JWT_SECRET);


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
        const token=jwt.sign({userId:user._id,},JWT_SECRET);

        res.json({
            token: token
        })
        return;
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

router.put('/',authMiddleware,async(req,res)=>{
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

router.get('/find',async(req,res)=>{
    const filter=req.query.filter ||""

    const users=await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            },
            lastName:{
                "$regex":filter
            }
        }]
    })

    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})
module.exports=router;
