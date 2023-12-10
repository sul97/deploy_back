const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect to MongoDB successfully");
  } catch (error) {
    console.log("Connect failed " + error.message);
  }
};

module.exports = connectDB;
