const dotenv=require('dotenv')
dotenv.config();
const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;
async function connectdb() {
    try {
        await mongoose.connect(url);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
}

module.exports = connectdb;
