const User = require("../models/usersModel");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const createToken = require("../utils/createToken");

const signup = async (req, res) => {
  const { Name, email, contactNumber, password } = req.body;
  try {
    const user = await User.signup(Name, email, password, contactNumber);
  

    res.status(200).json({
      Name,
      email,
      contactNumber,
      password,
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
    res.status(200).json({ Name: user.Name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    // Use the correct field name for the user's ID from your database schema
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
module.exports = {
  signup,
  login,
  getUser
};
