const { Connection } = require("../models/user_connection");
const { User } = require("../models/user_model");

var feed = async (req, res, next) => {
try{
    var loginuser = await User.findone({ email: req.user.email }).select("_id")
    let connection = await Connection.find({ $or: [{ byuser: loginuser._id }, { touser: loginuser._id }] }).select("byuser touser");

    page = parseInt(req.query.page) || 1;
    limit = parseInt(req.query.limit) || 10;
    limit = limit > 50 ? 50 : limit;

    skip=(page-1)*limit;
    var safedata = ["firstName", "lastName", "gender", "age", "profilePic", "skill"]

    const hideuserfromfeed = new set();
    connection.forEach(row => {
        hideuserfromfeed.add(row.byuser.toString());
        hideuserfromfeed.add(row.touser.toString());
    });

    let user =await User.find({
        _id: { $nin: Array.from(hideuserfromfeed) }
    }).select(safedata).skip(skip).limit(limit);

    res.json({ message: "feed is this", data: user })
}catch{
    (e)=>{
        console.log("their is an error :"+e);
    }
}

}
module.exports={
    feed:feed
}