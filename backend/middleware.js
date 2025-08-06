const {JWT_SECRET}=require('./config')
const jwt=require('jsonwebtoken')

const authmiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization

    if(!authHeader || !authHeader.startWith('Bearer')){
        return res.status(411).json({});
    }

    const token=authHeader.split('')[1];

    try{
        const decoded=jwt.verify(token,JWT_SECRET)
        req.userid=decoded.userid;
        next();
    }
    catch(err){
        return res.status(403).json({});
    }

}

module.exports={
    authmiddleware
}














    