var express = require('express');
var router = express.Router();
// var User = require("../controllers/user/user");
var User=require("../models/controllers/user/birthdayControllers");
router.get('/api/birthdays/today',User.sendData);

module.exports = router;