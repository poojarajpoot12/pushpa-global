const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// ==========================================
// PUBLIC ROUTES
// ==========================================
router.post("/signup", signup);
router.post("/login", login);


// ==========================================
// PROTECTED DASHBOARD ROUTES (Based on Roles)
// ==========================================

// 1. Admin Dashboard (Full Access)
router.get(
  "/admin",
  verifyToken,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ msg: "Admin Dashboard - full access" });
  }
);

// 2. Student Dashboard
router.get(
  "/student",
  verifyToken,
  authorizeRoles("student"),
  (req, res) => {
    res.json({ msg: "Student Dashboard" });
  }
);

// 3. Principal Dashboard
router.get(
  "/principal",
  verifyToken,
  authorizeRoles("admin", "principal"),
  (req, res) => {
    res.json({ msg: "Principal Dashboard" });
  }
);

// 4. Teacher Dashboard
router.get(
  "/teacher",
  verifyToken,
  authorizeRoles("admin", "teacher"),
  (req, res) => {
    res.json({ msg: "Teacher Dashboard" });
  }
);

// 5. Career Counsellor Dashboard (Matches your 'Career Counselling' role)
router.get(
  "/counsellor",
  verifyToken,
  authorizeRoles("admin", "career counsellor"),
  (req, res) => {
    res.json({ msg: "Career Counsellor Dashboard" });
  }
);

// 6. Coaching Partner Dashboard
router.get(
  "/coaching-partner",
  verifyToken,
  authorizeRoles("admin", "coaching partner"),
  (req, res) => {
    res.json({ msg: "Coaching Partner Dashboard" });
  }
);

module.exports = router;