const express=require('express')
const user=require("./userRoutes")
const account=require("./accountRoutes")

const router=express.Router()

router.use('/api/v1/user',user);
router.use('api/v1/account',account)

module.exports=router;