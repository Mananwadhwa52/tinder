const { User } = require("../models/user_model")
const { Connection } = require("../models/user_connection")

var connections=(req,res,next)=>{
    try{
    var loginuser=User.findone({ email: req.user.email }).select("_id");

    const connetionrequest = Connection.find({
        $or:[{touser: loginuser._id,status: "accepted"},
            {byuser: loginuser._id,status: "accepted"}
            
        ]
    }).populate("byuser",["firstName","lastName","gender","age","profilePic","skill"]).populate("touser",["firstName","lastName","gender","age","profilePic","skill"]);


    if (!connetionrequest) {
        throw error("their is no connection request")
    }
    var data = connetionrequest.map((row)=>{
        if(row.byuser._id.toString()===row.touser._id.toString()){
            throw error("the user doesnot request send to itself");
        }
        if(row.byuser._id.toString()===loginuser._id.toString()){
            return row.touser;
        }
        if(row.touser._id.toString()===loginuser._id.toString()){
            return row.byuser;
        }
    })


    res.json({
        message: "all successfull connections ",
        data:data
    });
}catch{
    (e)=>{
        console.log("their is an error:"+e)
    }
}
}
module.exports={
    connections:connections
}