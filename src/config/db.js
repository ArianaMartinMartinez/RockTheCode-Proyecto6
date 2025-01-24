const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Successfully connected to database");
    } catch(error) {
        console.log("Could not connect to database", error);
    }
}

module.exports = { connectDB };