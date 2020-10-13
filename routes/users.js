var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "אברהם האלוף"
  },
  {
    "id": 2,
    "name": "yosef"
  }];
  res.send(users);
});

module.exports = router;
