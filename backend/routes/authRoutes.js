const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await User.create({ username, email, password: hashed });
  res.json({ message: "User registered" });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json("Invalid");

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.status(400).json("Invalid");

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET
  );

  res.json({ token, username: user.username });
});

module.exports = router;
