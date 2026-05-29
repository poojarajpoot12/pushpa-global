const mongoose = require("mongoose");

const connectDaseBase = async () => {
  try {
    const dbURI = process.env.MONGO_URI;
    console.log("Connecting to MongoDB Atlas (Direct Mode)...");

    await mongoose.connect(dbURI);
    
    console.log("🚀 MongoDB Connected Successfully!");
  } catch (err) {
    console.error("❌ DB Connection Error Detail:", err);
    process.exit(1);
  }
}

module.exports = connectDaseBase;