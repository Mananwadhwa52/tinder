const express=require("express")
const { getprofile}=require("../controller/getprofile")
const {profile_edit}=require("../controller/profileedit")
const { userauth}=require("../middlewair/auth")
const {editPassword}=require("../controller/editpassword")
const {verifypasswordotp}=require("../controller/verifypassword")
const {forgotpassword}=require("../controller/forgotpassword")


const profileRouter=express.Router()

profileRouter.use(express.json())

profileRouter.post("/profile/veiw",userauth,getprofile);

profileRouter.patch("/profile/edit",userauth,profile_edit);

profileRouter.patch("/profile/editpassword",userauth,editPassword);

profileRouter.patch("/profile/verifypassword",verifypasswordotp);

profileRouter.post("/profile/forgotpassword",forgotpassword);


module.exports={
    profileRouter:profileRouter
}