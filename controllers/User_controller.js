const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const validateLoginInput = [
  check("email", "Please Include A valid Email").isEmail(),
  check("password", "password is required").exists(),
];

const validationChecks = [
  check("fullName", "Full Name is required")
    .not()
    .isEmpty()
    .isLength({ min: 3 }),
  check("email", "Please Include A valid Email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  // check('status', 'Status is required').not().isEmpty(),
  // check('skills', 'Please Include at least one skill').not().isEmpty(),
];

// const validateInputFunc = (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
// };
const CreateUser = async (req, res) => {
  // split to validateInputFunc
  // validateInputFunc(req, res);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  ///////////////////////////////////////////////
  const {
    fullName,
    email,
    password,
    status,
    skills,
    avatar,
    website,
    location,
    githubusername,
  } = req.body;

  const userFields = {};
  const teacherFields = {};
  // Required
  if (fullName) userFields.fullName = fullName;
  if (email) userFields.email = email;
  if (password) userFields.password = password;
  if (status) userFields.status = status;
  if (skills) userFields.skills = skills;
  if (avatar) userFields.avatar = avatar;
  // Optional
  // if (website) userFields.website = website;
  if (location) userFields.location = location;
  if (githubusername) userFields.githubusername = githubusername;
  if (skills) {
    userFields.skills = skills.split(",").map((skill) => skill.trim());
  }
  try {
    console.log(email);
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });
    console.log("user: ", userFields);
    //if (userFields.status) {
    const salt = await bcrypt.genSalt(10);
    userFields.password = await bcrypt.hash(password, salt);
    user = new User(userFields);
    await user.save();
    const payload = {
      user: { id: user.id },
    };
    /// split to authenticateUserFunc
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000000000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
    //}
    /////////////////////////////////////
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
/////////////////////////////////////////////////////

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000000000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

/////////////////////////////////////////////////

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("user", ["fullName", "avatar"]);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const authenticateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  CreateUser,
  validationChecks,
  validateLoginInput,
  loginUser,
  getAllUsers,
  authenticateUser,
};
