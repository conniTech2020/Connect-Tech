const express = require('express');
const auth = require('../middleware/auth');
// const gravatar = require('gravatar');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User_Controller = require('../controllers/User_controller');
//const { json } = require('express');

const User = require('../models/User');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "avrham"
  },
  {
    "id": 2,
    "name": "shuki"
  }];
  res.send(users);
});

// @route    GET /User
// @desc     Get all Users
// @access   Public

router.get('/getAllUsers', User_Controller.getAllUsers);

/////////////////////////////////////////////////////

// @route    POST /users/register
// @desc     Register User
// @access   Public

router.post('/register', User_Controller.validationChecks, User_Controller.CreateUser);

module.exports = router;
