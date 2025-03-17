const { sendOtp } = require("./mailer")
const { User } = require("../models/user_model")

var forgotpassword = async(req,res,next) => {



    const { userEmail } = req.body;
    if (!userEmail) {
        throw error("email is not comparsary ")
    }

    if (userEmail) {
        let vemail = validator.isEmail(userEmail)
        if (!vemail) {
            throw error("email is not correct ")
        }
    }
    
    var user =await User.findone({ email: userEmail })

    if (!user) {
        throw error("user already exist")
    }

    sendOtp(userEmail)
    res.send("otp send successfully")
}
module.exports={
    forgotpassword:forgotpassword
}