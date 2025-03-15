const { User } = require("../models/user_model")
const { Connection } = require("../models/user_connection")

var requestreveiwer = async (req, res, next) => {
    try {
        var logeduser = User.findone({ email: req.user.email }).select("_id");
        var byuser = req.param.byuser;
        var status = req.param.status;

        const allowedrequest = ["rejected", "accepted"]

        if (!allowedrequest.includes(status)) {
            throw error("this request was not allowed");

        }

        const Byuser = User.findone({
            _id: byuser
        })
        if (!Byuser) {

            throw error("the user to which request was send doesn`t exist in database")
        }

        const connetionrequest = Connection.findone({
            byuser: byuser,
            touser: logeduser,
            status: "interested"
        }).populate("touser byuser",["firstName lastName"]);

        if (!connetionrequest) {
            throw error("their is no connection request")
        }

        Connection.status = status;
        const data = await Connection.save();

        res.json({
            message: "connection request send successfully",
            data
        });
    } catch {
        (e) => {
            console.log("their is an error:" + e)
        }
    }
}
module.exports={
    requestreveiwer:requestreveiwer
}