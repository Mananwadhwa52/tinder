const validator = require("validator")
const bcrpyt = require("bcrypt")
const mongoose = require("mongoose")
const { User } = require("../models/user_model")
const { validate_signup } = require("../validator")
const { error } = require("console")

var signup = async (req, res, next) => {

    try {
        var { firstName, lastName, age, email, password, gender, profilePic } = req.body;

        validate_signup(req)

        var user =await User.findone({ email: email })

        if (user) {
            throw error("user already exist")
        }

        

        bcrpyt_password =await bcrpyt.hash(password, 15);

        newuser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: bcrpyt_password,
            age: age,
            gender: gender,
            profilePic: profilePic
        })


        await newuser.save()

        res.send("user successfully saved");
    }
    catch (e) {
            console.log('their is an error :' + e)
        }
}
module.exports = {
    signup: signup
}