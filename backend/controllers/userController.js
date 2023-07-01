const User = require("../models/usersModel");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const createToken = require("../utils/createToken");

const signup = async (req, res) => {
  const { fullName, email, contactNumber, password, userRole } = req.body;
  try {
    const user = await User.signup(
      fullName,
      email,
      password,
      contactNumber,
      userRole
    );
    const token = createToken(user._id);

    res.status(200).json({
      fullName,
      email,
      contactNumber,
      password,
      contactNumber,
      userRole,
      token,
      _id: user._id,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ fullName: user.fullName, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  signup,
  login,
};
