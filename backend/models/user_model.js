const dotenv=require('dotenv')
dotenv.config();
const mongoose=require("mongoose")
const validator= require("validator")
const jwt =require("jsonwebtoken")
const { Schema }=require("mongoose")



const user= new mongoose.Schema({
    firstName:{
        type:String,
        minlength:4,
        required:(true,"please enter first name"),
        maxlength:20,

    },
    lastName:{
        type:String,
        minlength:4,
        required:(true,"please enter last name"),
        maxlength:20,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:(v)=>{
            if(!validator.isEmail(v)){
                throw error("please enter valid email id")
            }
        }
        
    },
    password:{
        type:String,
        required:(true,"please enter password"),
        validate:(v)=>{
            if(!validator.isStrongPassword(v)){
                throw error("please enter a strong password")
            }
        }
    },
    gender:{
        type:String,
        required:(true,"plese enter gender"),
        enum:["male","female","others"]
    },
    age:{
        type:Number,
        required:(true,"plese enter your age"),
        min:18

    },
    profilePic:{
        type:String,
        required:true,
        validate:(v)=>{
            if(!validator.isURL(v)){
                throw error("please enter valid email id")
            }
        }
    },
    skill:{
        
        type:[],

    }
 },{
    timeStamp:true
 }
 );
 user.index({firstName:1,lastName:1})

 var secreatkey=SECRETKEY;

 user.methods.getjwt=async function(){

    var user=this;
    var token = await jwt.sign({ _id: user._id }, secreatkey)

    return token;

    
 }
 
 var User =new mongoose.model("User",user,"their is error in mongoose model")

 module.exports={
        User:User

 }