// ==========================================
// 1. DOTENV CONFIGURATION (SABSE UPAR HONA CHAHIYE)
// ==========================================
require("dotenv").config();

const express = require("express");
const cors = require("cors"); // Frontend connectivity ke liye zaroori hai
const connectDaseBase = require("./config/db.js");

const app = express();

// Debugging ke liye check kar rahe hain ki variables load huye ya nahi
console.log("--- HOSTINGER ENVIRONMENT CHECK ---");
console.log("PORT from Environment (Standard):", process.env.PORT);
console.log("PORT from Environment (App Port):", process.env.APP_PORT);
console.log("MONGO_URI Loaded:", process.env.MONGO_URI ? "YES (Sahi hai)" : "NO (Khaali hai)");
console.log("----------------------------------");

// ==========================================
// 2. MIDDLEWARES
// ==========================================
app.use(cors()); // CORS enable kiya taaki React se API hit ho sake
app.use(express.json()); // Body parser JSON data ke liye

// Request logger (Debugging ke liye best hai)
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// ==========================================
// 3. ROUTES
// ==========================================
// Test Route (Aapne check karne ke liye banaya tha)
app.get("/api/test", (req, res) => {
  res.status(200).json({ status: "success", message: "Server is working perfectly!" });
});

// Main User & Auth Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

// ==========================================
// 4. ERROR HANDLERS (Hamesha end mein aate hain)
// ==========================================

// 404 Route Not Found Handler
app.use((req, res, next) => {
  res.status(404).json({ 
    success: false, 
    error: `Can't find ${req.originalUrl} on this server!` 
  });
});

// Global Internal Server Error Handler (Server crash hone se bachane ke liye)
app.use((err, req, res, next) => {
  console.error("SERVER_ERROR 💥:", err.stack);
  res.status(500).json({
    success: false,
    error: err.message || "Internal Server Error"
  });
});

// ==========================================
// 5. SERVER START (UPDATED FOR HOSTINGER)
// ==========================================
// Hostinger khud port manage karega, isiliye PORT variable yahan check ho raha hai (Bina .env ke)
const PORT = process.env.PORT || process.env.APP_PORT || process.env.port || 3000; 

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 SERVER IS LIVE AND RUNNING ON PORT: ${PORT}`);
  
  // Server successfully listen hone ke BAAD database connect karenge
  try {
    connectDaseBase();
    console.log("🔗 Database connection process initiated...");
  } catch (dbError) {
    console.error("❌ Database connection failed on startup:", dbError.message);
  }
});