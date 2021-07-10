/* eslint-disable */
const mongoose = require('mongoose');

//create emrgency report schema

const Schema = mongoose.Schema;
const EmergencySchema = new Schema({
 date: Number,
 location: String,
 description: String
},{collection: "emergency_report"});
const Emergency= mongoose.model('Emergency', EmergencySchema)
module.exports = Emergency;