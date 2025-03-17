
const { verifyOtp } = require("./mailer")
const { User } = require("../models/user_model")


var verifypasswordotp=async(req,res,next)=>{
try{
const { userEmail,password,otp } = req.body;



if (!userEmail) {
    throw error("email is not comparsary ")
}

if (userEmail) {
    let vemail = validator.isEmail(userEmail)
    if (!vemail) {
        throw error("email is not correct ")
    }
}

        var user = await User.findone({ email: userEmail })

        if (!user) {
            throw error("user already exist")
        }
if(!verifyOtp(userEmail,otp)){
    (e)=>{
        console.log("otp was not correct"+e)
    }
}

let vpassword = validator.isStrongPassword(password)
if (!vpassword) {
    throw error("password is not strong ")
}
bcrpyt_password =await bcrpyt.hash(password, 15);

user.password = bcrpyt_password;

await User.updateOne({ email: userEmail }, { $set: { password: bcrpyt_password } })
res.send(
    console.log("password successfully changed")
)

    } catch {
    (e) => {
        console.log("their is an error:" + e)
    }
}


}
module.exports={
    verifypasswordotp:verifypasswordotp

}