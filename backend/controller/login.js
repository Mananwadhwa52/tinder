const validator = require("validator")
const bcrpyt = require("bcrypt")

const cookie_parser = require("cookie-parser")
const mongoose = require("mongoose")
const { User } = require("../models/user_model")
const jwt = require("jsonwebtoken")



var login = async (req, res, next) => {

    try {
        var { email, password } = req.body;
        var user =await User.findOne({ email: email })

        if (!user) {
            throw error("user doesn`t exist in database")
        }

        let bcrpyt_password = await bcrpyt.compare(password, user.password);
        if (bcrpyt_password) {

            var token = user.getjwt()
        } else {
            throw error("password is incorrect please enter correct password")
        }
        
        res.cookie("token", token)
        res.send("successffully login")

    }
    catch {
        (e) => {
            console.log('their is an error :' + e)
        }
    }
}

module.exports = {
    login: login
}