const User = require("../models/User"); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { google } = require("googleapis");

// Google Sheets Config Setup
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || "YOUR_SPREADSHEET_ID_HERE";

async function appendToGoogleSheet(userData) {
  try {
    // Service Account Credentials Authenticate karein
    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json", 
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    
    let tabName = "";
    let rowValues = [];
    const timestamp = new Date().toLocaleString();

    const formattedRole = userData.role ? userData.role.toLowerCase().trim() : "student";
    const messageStr = userData.message || "";
    const sFields = userData.dynamicProfile?.studentFields || {};

    // 🔥 NAYAA LOGIC: Message string ke prefix check se Google Sheet ka Tab set karna
    if (messageStr.includes("WEBSITE CHATBOT")) {
      // 1. Chatbot Leads Tab
      tabName = "Chatbot Leads";
      rowValues = [
        timestamp,
        userData.fullName,
        userData.phoneNumber,
        userData.email || "N/A",
        userData.city || "N/A",
        sFields.currentQualification || "N/A",
        sFields.preferredCountry || "N/A",
        messageStr // Isme budget aur full source text save rahega
      ];
    } else if (messageStr.includes("CAREER COUNSELLING FORM")) {
      // 2. Career Counselling Form Leads Tab
      tabName = "Career Counselling Leads";
      rowValues = [
        timestamp,
        userData.fullName,
        userData.phoneNumber,
        userData.email,
        userData.city,
        userData.state || "N/A",
        sFields.currentQualification || "N/A",
        sFields.interestedCourse || "N/A",
        sFields.preferredCountry || "India",
        sFields.budgetRange || "N/A",
        sFields.studyTimeline || "N/A",
        messageStr // Isme board, score, parent details aur additional notes sab milenge
      ];
    } else {
      // 3. Register Form se aane wale baki saare doosre roles (Principal, Teacher, Partner etc.)
      tabName = "Quick Register Leads";
      rowValues = [
        timestamp,
        userData.fullName,
        userData.phoneNumber,
        userData.email,
        formattedRole, // Yahan unka actual selected role (principal, teacher, etc.) show hoga
        userData.city || "N/A",
        userData.state || "N/A",
        messageStr || "N/A"
      ];
    }

    // Google Sheets API to append row
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: `${tabName}!A:A`, 
      valueInputOption: "USER_ENTERED",
      resource: { values: [rowValues] },
    });

    console.log(`Lead successfully added to Google Sheet tab: ${tabName}`);
  } catch (sheetError) {
    console.error("Google Sheet Append Error:", sheetError);
  }
}

// ==========================================
// SIGNUP CONTROLLER
// ==========================================
exports.signup = async (req, res) => {
  try {
    const { 
      fullName, 
      email, 
      phoneNumber, 
      city, 
      state, 
      role, 
      password, 
      dynamicProfile, 
      message 
    } = req.body;

    // 1. Validation check
    if (!fullName || !email || !phoneNumber || !role || !password) {
      return res.status(400).json({ msg: "Please fill all required common fields" });
    }

    // 2. Check if user already exists
    const existUser = await User.findOne({ email: email.toLowerCase() });
    if (existUser) {
      return res.status(400).json({ message: "User is already registered" });
    }

    // 3. Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Role format handle karna
    const formattedRole = role.toLowerCase().trim(); 

    // 5. Create User in Database
    const user = await User.create({
      fullName,
      email: email.toLowerCase(),
      phoneNumber,
      city,
      state,
      role: formattedRole, 
      password: hashedPassword,
      dynamicProfile, 
      message,
      uploadedDocumentUrl: req.file ? req.file.path : "" 
    });

    // 🔥 6. Google Sheet Trigger (Hume req.body bhejni hai jisme dynamic message aur flags hain)
    await appendToGoogleSheet(req.body);

    // 7. Success Response
    res.status(201).json({
      message: "User Registered Successfully",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: error.message });
  }
};

// ==========================================
// LOGIN CONTROLLER (Bina badlao ke)
// ==========================================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Please provide email and password" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1d" }
    );

    res.status(200).json({ 
      token, 
      role: user.role,
      fullName: user.fullName 
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: error.message });
  }
}; 