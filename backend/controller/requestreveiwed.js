const { User } = require("../models/user_model")
const { Connection } = require("../models/user_connection")

var requestreveiwer = async (req, res, next) => {
    try {
        var logeduser =await User.findone({ email: req.user.email }).select("_id");
        var byuser = req.params.byuser;
        var status = req.params.status;

        const allowedrequest = ["rejected", "accepted"]

        if (!allowedrequest.includes(status)) {
            throw error("this request was not allowed");

        }

        const Byuser =await User.findone({
            _id: byuser
        })
        if (!Byuser) {

            throw error("the user to which request was send doesn`t exist in database")
        }

        const connetionrequest =await Connection.findone({
            byuser: byuser,
            touser: logeduser._id,
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