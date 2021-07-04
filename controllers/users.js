const UserSchema = require('../models/User.js');
module.exports.controller = (app) => {
 // add a new user
 app.post('/users', (req, res) => {
 const newUser = new UserSchema({
    full_name: req.body.full_name,
    bp_number: req.body.bp_number,
    email: req.body.email,
    password: req.body.password
 });
 newUser.save((error, user) => {
 if (error) { console.log(error); }
 res.send(user);
 });
 });
};

