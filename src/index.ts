/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/mongoose/mongoose.d.ts" />
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
var Article = require('./schema/article');

mongoose.connect('mongodb://localhost/my_database');

// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});

Article.create({
  title: 'Blooom',
  author: 'Christopher',
  body: 'alksdfjaösf'
}, function(err, _article) {
  console.log(_article);
})
