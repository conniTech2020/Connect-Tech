var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "avrham"
  },
  {
    "id": 2,
    "name": "shuki"
  },
  {
    "id": 3,
    "name": "yosef"
  },
  {
    "id": 4,
    "name": "ithak"
  },
  {
    "id": 5,
    "name": "tom"
  },
  {
    "id": 6,
    "name": "effi"
  }];
  res.send(users);
});

module.exports = router;
