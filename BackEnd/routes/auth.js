// backend/routes/auth.js
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Protected data access granted" });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    return res.json({ token: "dummy-token" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
