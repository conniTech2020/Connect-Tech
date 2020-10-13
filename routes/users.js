const express = require('express');
const auth = require('../middleware/auth');
// const gravatar = require('gravatar');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User_Cntrl = require('../controllers/User_controller');
//const { json } = require('express');

const User = require('../models/User');

const router = express.Router();

/* GET users listing. */
router.get('/test', function(req, res, next) {
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

router.get('/', User_Cntrl.getAllUsers);

/////////////////////////////////////////////////////

// @route    POST /users/register
// @desc     Register User
// @access   Public

router.post('/register', User_Cntrl.validationChecks, User_Cntrl.CreateUser);

module.exports = router;
