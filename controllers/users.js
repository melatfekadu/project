/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const UserSchema = require('../models/User.js');
const router = express.Router();
module.exports.controller = (app) => {
      app.get('/users',(req,res)=>{
       res.json({ message: 'API Initialized!'});
       
   });    
 // add a new user
 app.post('/users', (req, res) => {
 const newUser = new UserSchema({
    name : req.body.full_name,
    email: req.body.email,
    password: req.body.password
 });
 newUser.save((error, user) => {
 if (error) { console.log(error); }
 res.send(user);
 });
 });
};

