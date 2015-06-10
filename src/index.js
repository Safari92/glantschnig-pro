/**
 * glantschnig.pro
 *
 * Entry point of the application
 *
 */
var mongoose = require('mongoose');
var server = require('./app');
var routes = require('./routes');
var User = require('./schema/user');

mongoose.connect('mongodb://localhost/my_database');

// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});