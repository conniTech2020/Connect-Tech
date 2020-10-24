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
// router.get('/', function(req, res, next) {
//   const users = [{
//     "id": 1,
//     "name": "avrham"
//   },
//   {
//     "id": 2,
//     "name": "shuki"
//   }];
//   res.send(users);
// });

// @route    GET /users/getAllStudent
// @desc     Get all Users(Students)
// @access   Public

router.get('/getAllStudent', User_Controller.getAllUsers);

/////////////////////////////////////////////////////

// @route    GET /users/getAllTeacher
// @desc     Get all Users(teachers)
// @access   Public

router.get('/getAllTeachers', User_Controller.getAllTeachers);


///////////////////////////////////////////////////////

// @route    POST /users/register
// @desc     Register User
// @access   Public

router.post('/register', User_Controller.validationChecks, User_Controller.CreateUser);

/////////////////////////////////////////////////////////////
// @route    POST /users/login
// @desc     Authenticate User & get token
// @access   Public

router.post('/login', User_Controller.validateLoginInput, User_Controller.loginUser);

/////////////////////////////////////////////////////////////

router.post('/tokenIsValid', async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) return res.json(false);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(!verified) return res.json(false)
    const user = await User.findById(verified.id);
    if(!user) return res.json(false)

    return res.json(true)
  } catch (err) {
      return err.message
  }
    
});

//@ route GET/users/deleteUser
// @desc update user
// @access Public

router.delete('/deleteUser/:id', User_Controller.deleteUser);

/////////////////////////////////////////////////////////////

//@ route GET/users/updateUser
// @desc update user
// @access Public

router.put('/updateUser/:id', User_Controller.updateUser);

/////////////////////////////////////////////////////////////

// @route    GET /users/userauth
// @desc     Test route
// @access   Public

router.get('/userauth', auth, User_Controller.authenticateUser);


module.exports = router;
