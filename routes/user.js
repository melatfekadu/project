var express = require('express');
var router = express.Router();

var UserController = require('../controllers/users')

router.get('/users', UserController.users);

module.exports = user;