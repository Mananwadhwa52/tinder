const mongoose = require("mongoose");
require('dotenv').config();

const connectdb = async () => {
    await mongoose.connect(process.env.url)
}



module.exports = {
    connectdb: connectdb
}
