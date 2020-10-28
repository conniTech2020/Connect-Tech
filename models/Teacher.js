const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: { type: Boolean, required: true, default: false },
  skills: { type: [String], required: true },
  bio: { type: String },
  avatar: { type: String },
  professions:{type: [String],required: true}, 
  location: { type: String },
  githubusername: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = Teacher = mongoose.model('teacher', TeacherSchema);