const { User}=require("../models/user_model")
const { }=require("../middlewair/auth")


const getprofile=(req,res,next)=>{

    var user =req.user;

    res.json(user)

    
}

module.exports={
    getprofile:getprofile
}