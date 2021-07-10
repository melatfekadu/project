/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const Emergency = require('../models/Emergency_report.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all users
 app.get('/emergencys', (req, res) => {
  Emergency.find({}, 'date location description', function (error, emergency) {
  if (error) { console.log(error); }
  res.send(emergency);
  })
})

//get a single user details
app.get('/emergency/:id', (req, res) => {
  Emergency.findById(req.params.id, 'date location description', function (error, emergency) {
  if (error) { console.log(error); }
  res.send(emergency)
 })
})
 
     
 // add a new user
    app.post('/emergencys', (req, res) => {
      const newEmergency = new Emergency({
      date: req.body.date,
      location: req.body.location,
      description: req.body.description
    });
        newEmergency.save((error, emergency) => {
        if (error) { console.log(error); }
        res.send(emergency);
        });
    });

     // update a user
  app.put('/emergency/:id', (req, res) => {
    Emergency.findById(req.params.id, 'date location description', function (error, emergency) {
    if (error) { console.error(error); }
      emergency.date = req.body.email
      emergency.location = req.body.location
      emrgency.description= req.body.description
       emrgency.save(function (error, user) {
    if (error) { console.log(error); }
       res.send(emergency)
    })
  })
})

// delete a user
app.delete('/emergency/:id', (req, res) => {
  User.remove({
    _id: req.params.id
    }, function(error){
   if (error) { console.error(error); }
      res.send({ success: true })
   })
})

  };

