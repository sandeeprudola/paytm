const mongoose=require('mongoose')
const { string } = require('zod')

mongoose.connect('mongodb://localhost:27017/')
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log("error",err)
})

const UserSchema=new mongoose.Schema({
    Username: string,
    password:string,
    firstname:string,
    lastname:string,

})
 const User=mongoose.model('User',UserSchema);

 module.exports={
    User
 }

