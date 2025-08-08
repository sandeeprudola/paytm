require("dotenv").config();
const mongoose=require('mongoose')
const { string, number } = require('zod')

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log("error",err)
})

//user schema 

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

//account schema

const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',//adds reference to user table or user schema that i cannot put any random data without checks
        required:true
    },
    balance:{
        type:"Number",
        required:true
    }
})
 const User=mongoose.model('User',UserSchema);
 const Account=mongoose.model('Account',accountSchema)

 module.exports={
    User,
    Account,
 }

