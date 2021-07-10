/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
 full_name: String,
 username: String,
 email: String,
 password: String,
 phone_no: Number,
 kebele: Number,
 gender: String
},{collection: "customer"});
const Customer = mongoose.model('Customer', CustomerSchema)
module.exports = Customer;