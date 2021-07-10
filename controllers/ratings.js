/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const UserSchema = require('../models/User.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all users
 app.get('/users', (req, res) => {
  User.find({}, 'email password', function (error, users) {
  if (error) { console.log(error); }
  res.send(users);
  })
})
//get a single user details
app.get('/users/:id', (req, res) => {
  User.findById(req.params.id, 'email password', function (error, user) {
  if (error) { console.log(error); }
  res.send(user)
 })
})
 
     
 // add a new user
    app.post('/users', (req, res) => {
      const newUser = new UserSchema({
      email: req.body.email,
      password: req.body.password
    });
        newUser.save((error, user) => {
        if (error) { console.log(error); }
        res.send(user);
        });
    });
  };

