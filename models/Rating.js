/* eslint-disable */
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
 email: String,
 password: String
},{collection: "users"});
const User = mongoose.model('User', UserSchema)
module.exports = User;