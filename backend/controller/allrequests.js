const { User } = require("../models/user_model")
const { Connection } = require("../models/user_connection")

var allrequests=async(req,res,next)=>{
    try{
    var loginuser=await User.findone({ email: req.user.email }).select("_id");
    
    const connetionrequest =await Connection.find({
       
        touser: loginuser,
        status: "interested"
    }).populate("byuser",["firstName","lastName","gender","age","profilePic","skill"]).populate("touser",["firstName","lastName","gender","age","profilePic","skill"]);

    if (!connetionrequest) {
        throw error("their is no connection request")
    }
    var data = connetionrequest.map((row)=>{
        if(row.byuser._id.toString()===loginuser._id.toString()){
            row.byuser=0;
        }
    })


    res.json({
        message: "all connection request ",
        data:data
    });
}catch{
    (e)=>{
        console.log("their is an error:"+e)
    }
}
}
module.exports={
    allrequests:allrequests
}