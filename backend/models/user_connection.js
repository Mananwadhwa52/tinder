
// const { timeStamp } = require("console")
const mongoose=require("mongoose")
const validator= require("validator")
const { User }=require("./user_model")


 var connection= new mongoose.Schema({
    byuser:{
        type:mongoose.Schema.Types.ObjectId, 
        require:(true,"enter the name of person who send the request "),
        ref: 'User'
    },
    touser:{
        type:mongoose.Schema.Types.ObjectId, 
        require:(true,"enter the name of person to whome request was send"),
        ref: 'User'
    },
    status:{
        type:String,
        enum:(["interested","rejected","accepted","ignore"],"please enter valid status code")
    }
 },{
    timeStamp:true
 });
 connection.index({byuser:1,touser:1});
 

 var Connection =new mongoose.model("Connection",connection,"their is error in mongoose model")
 
  module.exports={
         Connection:Connection
 
  }