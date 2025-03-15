const express=require("express")
const  cookie_parser =require("cookie-parser")
const {signup}=require("../controller/signup")
const {login}=require("../controller/login")
const {logout}=require("../controller/logout")

const authRouter=express.Router()

authRouter.use(express.json())
authRouter.use(cookie_parser())

authRouter.post("/signup",signup);

authRouter.post("/login",login);

authRouter.post("/logout",logout);

module.exports={
    authRouter:authRouter
}