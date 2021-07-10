/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const Customer = require('../models/Customer.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all users
 app.get('/customers', (req, res) => {
  Customer.find({}, 'fullname username email password phone_no kebele gender', function (error, customers) {
  if (error) { console.log(error); }
  res.send(customers);
  })
})

//get a single user details
app.get('/customer/:id', (req, res) => {
  Customer.findById(req.params.id, 'fullname username email password phone_no kebele gender', function (error, customer) {
  if (error) { console.log(error); }
  res.send(customer)
 })
})
    
 // add a new user
    app.post('/customers', (req, res) => {
      const newCustomer = new Customer({
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password, 
      phone_no: req.body.phone_no,
      kebele: req.body.kebele,
      gender: req.body.gender

    });
        newCustomer.save((error, customer) => {
        if (error) { console.log(error); }
        res.send(customer);
        });
    });

     // update a user
  app.put('/customer/:id', (req, res) => {
    Customer.findById(req.params.id, 'fullname username email password phone_no kebele gender', function (error, customer) {
    if (error) { console.error(error); }
      customer.fullname=req.body.fullname
      customer.username= req.body.username
      customer.email= req.body.email
      customer.password= req.body.password 
      customer.phone_no= req.body.phone_no
      customer.kebele=req.body.kebele
      customer.gender= req.body.gender

       customer.save(function (error, customer) {
    if (error) { console.log(error); }
       res.send(customer)
    })
  })
})

// delete a user
app.delete('/customer/:id', (req, res) => {
  Customer.remove({
    _id: req.params.id
    }, function(error){
   if (error) { console.error(error); }
      res.send({ success: true })
   })
})

  };

