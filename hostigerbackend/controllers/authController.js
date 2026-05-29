const User = require("../models/User"); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { google } = require("googleapis");

// ⚠️ APNI SPREADSHEET ID YAHAAN CHECK KARIYE
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || "YOUR_SPREADSHEET_ID_HERE";

async function appendToGoogleSheet(userData) {
  try {
    // 1. Debug: Check if function is calling
    console.log("=== GOOGLE SHEET ATTEMPT START ===");
    console.log("Received Role for Sheet:", userData.role);

    const auth = new google.auth.GoogleAuth({
      keyFile: "credentials.json", // ⚠️ CHECK: Kya ye file aapke backend ke root folder mein isi naam se hai?
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    
    let tabName = "";
    let rowValues = [];
    const timestamp = new Date().toLocaleString();

    const formattedRole = userData.role ? userData.role.toLowerCase().trim() : "student";
    let messageStr = userData.message || "";
    
    const dProfile = userData.dynamicProfile || {};
    const sFields = dProfile.studentFields || {};
    const pFields = dProfile.principalFields || {};
    const tFields = dProfile.teacherFields || {};
    const cFields = dProfile.counsellorFields || {};
    const coFields = dProfile.coachingFields || {};
    
    let schoolName = "N/A";
    let board = "N/A";
    let totalStudents = "N/A";
    let subject = "N/A";
    let experience = "N/A";
    let qualification = "N/A";
    let course = "N/A";
    let country = "N/A";
    let budget = "N/A";

    if (formattedRole === "student") {
      qualification = sFields.currentQualification || "N/A";
      course = sFields.interestedCourse || "N/A";
      country = sFields.preferredCountry || "India";
      budget = sFields.budgetRange || "N/A";
    } 
    else if (formattedRole === "principal") {
      schoolName = pFields.schoolName || "N/A";
      board = pFields.board || "N/A";
      totalStudents = pFields.totalStudents || "N/A";
    } 
    else if (formattedRole === "teacher") {
      schoolName = tFields.currentOrganization || "N/A";
      subject = tFields.subjectTaught || "N/A";
      experience = tFields.yearsOfExperience || "N/A";
    } 
    else if (formattedRole === "career counselling" || formattedRole === "counsellor") {
      schoolName = cFields.organizationName || "N/A";
      experience = cFields.yearsOfExperience || "N/A";
      if(cFields.studentVolumeMonthly) {
         messageStr = `[Monthly Volume: ${cFields.studentVolumeMonthly}] ${messageStr}`;
      }
    }
    else if (formattedRole === "coaching partner" || formattedRole === "coaching") {
      schoolName = coFields.instituteName || "N/A";
      course = coFields.coursesOffered || "N/A";
      totalStudents = coFields.numberOfStudents || "N/A";
    }

    // TAB MANAGEMENT
    if (messageStr.includes("WEBSITE CHATBOT")) {
      tabName = "Chatbot Leads";
      rowValues = [
        timestamp, userData.fullName, userData.phoneNumber, userData.email || "N/A",
        userData.city || "N/A", qualification, country, messageStr
      ];
    } 
    else if (messageStr.includes("CAREER COUNSELLING FORM") || formattedRole === "student") {
      tabName = "Career Counselling Leads";
      rowValues = [
        timestamp, userData.fullName, userData.phoneNumber, userData.email, userData.city || "N/A", userData.state || "N/A",
        qualification, course, country, budget, sFields.studyTimeline || "N/A", messageStr || "N/A"
      ];
    } 
    else {
      tabName = "Quick Register Leads";
      rowValues = [
        timestamp, userData.fullName, userData.phoneNumber, userData.email, formattedRole,
        userData.city || "N/A", userData.state || "N/A", schoolName, board, totalStudents, subject, experience, messageStr || "N/A"
      ];
    }

    // 2. Debug: See what Tab and Row are being sent
    console.log("Target Tab Name:", `"${tabName}"`);
    console.log("Row Values to Append:", rowValues);

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: `${tabName}!A:A`, 
      valueInputOption: "USER_ENTERED",
      resource: { values: [rowValues] },
    });

    console.log("✅ Google API Response Status:", response.status);
    console.log(`🚀 Successfully Added to Google Sheet: ${tabName}`);
    console.log("=== GOOGLE SHEET ATTEMPT END ===");
  } catch (sheetError) {
    console.error("❌❌ GOOGLE SHEET ERROR DETAILS ❌❌");
    console.error("Message:", sheetError.message);
    if (sheetError.response) {
      console.error("API Response Data:", sheetError.response.data);
    }
    console.error("=====================================");
  }
}

// SIGNUP CONTROLLER
exports.signup = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, city, state, role, password, message } = req.body;
    let { dynamicProfile } = req.body;

    if (!fullName || !email || !phoneNumber || !role || !password) {
      return res.status(400).json({ msg: "Please fill all required common fields" });
    }

    const existUser = await User.findOne({ email: email.toLowerCase() });
    if (existUser) return res.status(400).json({ message: "User is already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const formattedRole = role.toLowerCase().trim(); 

    // Raw payload ki deep copy Google sheet ke liye bhej rahe hain
    const sheetPayload = JSON.parse(JSON.stringify(req.body));
    
    // Fire and forget calling (await nahi laga rahe taaki user signup na atke)
    appendToGoogleSheet(sheetPayload);

    // Compass cleanup
    if (dynamicProfile) {
      if (formattedRole !== "student") delete dynamicProfile.studentFields;
      if (formattedRole !== "principal") delete dynamicProfile.principalFields;
      if (formattedRole !== "teacher") delete dynamicProfile.teacherFields;
      if (formattedRole !== "career counselling" && formattedRole !== "counsellor") delete dynamicProfile.counsellorFields;
      if (formattedRole !== "coaching partner" && formattedRole !== "coaching") delete dynamicProfile.coachingFields;
    }

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

    return res.status(201).json({
      message: "User Registered Successfully",
      user: { _id: user._id, fullName: user.fullName, email: user.email, role: user.role }
    });

  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ error: error.message });
  }
};

// LOGIN CONTROLLER
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ msg: "Please provide email and password" });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || "secretkey", { expiresIn: "1d" });
    return res.status(200).json({ token, role: user.role, fullName: user.fullName });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};