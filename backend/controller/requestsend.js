const { Connection } = require("../models/user_connection")
const { User } = require("../models/user_model")

var sendRequest = async (req, res, next) => {

    try {
        const byuser =await User.findone({ email: req.user.email }).select("_id");
        const touser = req.params.touser;
        const status = req.params.status;

        const allowedRequest = ["ignored", "interested"]
        if (!allowedRequest.includes(status)) {
            throw error("this request are incorrect")
        }
        if (touser == byuser) {

            throw error("you don`t send request to yourself")
        }


        const existinguser = await Connection.findone({
            $or: [
                { byuser: byuser, touser: touser },
                { byuser: touser, touser: byuser }
            ]
        })

        if (existinguser) {
            throw error("their is an essixting user request")
        }

        const Touser =await User.findone({
            _id: touser
        })
        if (!Touser) {

            throw error("the user to which request was send doesn`t exist in database")
        }
        const connection = new Connection({
            byuser,
            touser,
            status
        })

        const data = await connection.save();

        res.json({
            message: "connection request send successfully",
            data
        });

    } catch {
        (e) => {
            console.log("their is an error" + e)
        }
    }

}
module.exports={
     sendRequest :sendRequest

}