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
  check("isTeacher", "choose Student/Teacher is required")
  
];


const CreateUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    return res.status(400).json({ errors: errors.array() });
  }
  const {
    fullName,
    email,
    password,
    status,
    skills,
    Avatar,
    website,
    location,
    githubusername,
    isTeacher,
  } = req.body;

  const userFields = {};
  const teacherFields = {};
  // Required
  if (fullName) userFields.fullName = fullName;
  if (email) userFields.email = email;
  if (password) userFields.password = password;
  if (status) userFields.status = status;
  if (skills) userFields.skills = skills;
  if (Avatar) userFields.Avatar = Avatar;
  if (isTeacher) userFields.isTeacher = isTeacher;
  if (isTeacher === false) userFields.isTeacher = isTeacher;
  // Optional
  
  if (location) userFields.location = location;
  if (githubusername) userFields.githubusername = githubusername;
  if (skills) {
    userFields.skills = skills.split(",").map((skill) => skill.trim());
  }
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });
    
    const salt = await bcrypt.genSalt(10);
    userFields.password = await bcrypt.hash(password, salt);
    user = new User(userFields);
    await user.save();
    const payload = {
      user: { id: user.id },
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



const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({isTeacher:false}).populate("user", ["fullName", "avatar"]);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};



const getAllTeachers = async (req, res) => {
  try {
    const users = await User.find({isTeacher:true}).populate("user", ["fullName", "avatar"]);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};


const authenticateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const deleteUser = async (req, res) => {
  
  await User.findByIdAndDelete({ _id: req.params.id }, (err, deleteuser) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!deleteuser) {
      return res
        .status(404)
        .json({ success: false, error: `user not found` });
    }
    return res.status(200).json({ success: true, data: deleteuser });
  }).catch((err) => console.log(err));
};

const updateExperience = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  try {
    const updateuser = await User.updateOne({ _id: req.params.id }, { $addToSet:{experience:[req.body]}});

      return res.status(200).json({
        success: true,
        message: "user updated !",
        data: updateuser,
      });  
  }
  catch(error) {
    return res.status(400).json({ success: false,error: err});
  }
};



const updateUser = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  try {
    const updateuser = await User.findOne({ _id: req.params.id }).exec();

    updateuser.fullName = body.fullName;
    updateuser.experience = body.updateExperience;
    updateuser.education = body.education;
   
    updateuser.save()
    .then(() => {
      return res.status(200).json({
        success: true,
        message: "user updated !",
        data: updateuser,
      });
    });
  } catch (error) {
    return res.status(400).json({ success: false,error: err});
  }
};



const UpdateAll = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  try {
    const updateuser = await User.updateOne({ _id: req.params.id }, req.body).exec();

      return res.status(200).json({
        success: true,
        message: "user updated !",
        data: updateuser,
      });
  
  } catch (error) {
    return res.status(400).json({ success: false,error: err});
  }
};





const GetUserById = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "user did not found",
    });
  }
  try {
    const updateuser = await User.findOne({ _id: req.params.id }).exec();
      return res.status(200).json({
        success: true,
        message: "user found !",
        data: updateuser,
      });
  }catch(error){

    console.error(err.message);
    res.status(500).send("can not found, Server Error");
  }
}
  


module.exports = {
  CreateUser,
  validationChecks,
  validateLoginInput,
  loginUser,
  getAllUsers,
  getAllTeachers,
  authenticateUser,
  deleteUser,
  updateUser,

};


