const { sendOtp, verifyOtp } = require("./mailer")

const { User } = require("../models/user_model")


const editPassword = async (req, res, next) => {

    try {
        
        var user = User.findone({ _id: req.user.email })

        const { password } = req.body;


        let vpassword = validator.isStrongPassword(password)
        if (!vpassword) {
            throw error("password is not strong ")
        }
        bcrpyt_password = bcrpyt.hash(password, 15);

        user.password = bcrpyt_password;

        await User.updateOne({ email: req.user.email }, { $set: { password: bcrpyt_password } })
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
    editPassword:editPassword
}