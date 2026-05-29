const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  // Authorization header check kiya (Bearer format ke liye)
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token provided, authorization denied" });
  }

  // "Bearer key_here" se split karke sirf actual token nikala
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
    req.user = decoded; // Token ka data req.user mein save kiya
    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid or expired token" });
  }
};