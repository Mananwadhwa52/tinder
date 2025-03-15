const { User } = require("../models/user_model")
const { verifySignupData } = require("../validator")
const profile_edit = async(req, res, next) => {

    try {
        if (!verifySignupData(req.body)) {
            throw error("data was not updated successfully");

        }
        var loginuser = req.user;
        Object.keys(req.body).forEach((loginuser[keys] = req.body[keys]))
        
       await User.updateOne({email:req.user.email},{$set:loginuser})
        res.send("updated successfully")


    } catch {

        (e) => {
            console.log("their is an error" + e)
        }
    }
}

module.exports = {
    profile_edit: profile_edit
}