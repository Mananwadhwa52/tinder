const { error } = require("console");
const validator = require("validator")

var validate_signup = (req) => {

    var { firstName, lastName, age, email, password, gender, profilePic } = req.body;

    if (!firstName || lastName) {

        throw error("please enter first name and last name")
    }

    if (email) {
        let vemail = validator.isEmail(email)
        if (!vemail) {
            throw error("email is not correct ")
        }
    }

    let vpassword = validator.isStrongPassword(password)
    if (!vpassword) {
        throw error("password is not strong ")
    }

    



}
const verifySignupData=(req)=>{


    var safedata =["firstName","lastName","gender","age","profilePic","skill"]


    var is_allowed=Object.keys(req.body).map((field)=>safedata.includes(field));

    return is_allowed;
}


module.exports={
    validate_signup:validate_signup,
    verifySignupData:verifySignupData

}