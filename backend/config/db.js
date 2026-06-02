const mongoose = require("mongoose");

const connectDaseBase = async () => {
  try {
    const dbURI = process.env.MONGO_URI;
    
    if (!dbURI) {
      console.error("❌ CRITICAL ERROR: process.env.MONGO_URI is undefined! Check Hostinger Variables.");
      return;
    }

    console.log("⏳ Connecting to MongoDB Atlas via Direct Shard Mode...");
    
    // Connection trigger
    const conn = await mongoose.connect(dbURI);
    
    console.log(`🚀 MongoDB Connected Successfully to: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ DB Connection Error Detail:", err);
  }
}

module.exports = connectDaseBase;