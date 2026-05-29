const express = require("express");
const cors = require("cors"); // Frontend connectivity ke liye zaroori hai
const connectDaseBase = require("./config/db.js");

// dotenv configuration (Hamesha DB connect hone se pehle load hona chahiye)
require("dotenv").config();

const app = express();

// ==========================================
// MIDDLEWARES
// ==========================================
app.use(cors()); // CORS enable kiya taaki React se API hit ho sake
app.use(express.json()); // Body parser JSON data ke liye

// Request logger (Debugging ke liye best hai)
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// DB Connection
connectDaseBase();

// ==========================================
// ROUTES
// ==========================================
// Test Route (Aapne check karne ke liye banaya tha)
app.get("/api/test", (req, res) => {
  res.status(200).json({ status: "success", message: "Server is working perfectly!" });
});

// Main User & Auth Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

// ==========================================
// ERROR HANDLERS (Hamesha end mein aate hain)
// ==========================================

// 1. 404 Route Not Found Handler
app.use((req, res, next) => {
  res.status(404).json({ 
    success: false, 
    error: `Can't find ${req.originalUrl} on this server!` 
  });
});

// 2. Global Internal Server Error Handler (Server crash hone se bachane ke liye)
app.use((err, req, res, next) => {
  console.error("SERVER_ERROR 💥:", err.stack);
  res.status(500).json({
    success: false,
    error: err.message || "Internal Server Error"
  });
});

// ==========================================
// SERVER START
// ==========================================
const PORT = process.env.PORT || 5000; // .env se port uthayega, nahi to default 5000

app.listen(PORT, () => {
  console.log(`🚀 Server fully operational on port ${PORT}`);
});