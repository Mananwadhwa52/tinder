const jwt = require("jsonwebtoken")
const { User } = require("../models/user_model")

var safedata =["firstName","lastName","email","gender","age","profilePic","skill"]

var userauth = async (req, res, next) => {
    try {
        var { token } = req.cookies;

        var decorded_token = await jwt.verify(token, process.env.secreatkey)

        var { _id } = decorded_token;

        var user = User.findByID(_id).select(safedata)

        if (!user) {
            throw error("user doesnot exist in database")
        }

        req.user = user;
        next()


    } catch {
        (e) => {
            console.log("their is an  error : " + e)
        }
    }

}

module.exports={
    userauth:userauth
}