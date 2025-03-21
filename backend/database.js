const mongoose = require("mongoose");


const connectdb = async () => {
    await mongoose.connect(process.env.url)
}



module.exports = {
    connectdb: connectdb
}
