/// <reference path="../../typings/node/node.d.ts" />
var server = require('../app');
var HomeController = require('../controllers/HomeController');

server.route({
  method: 'GET',
  path: '/',
  handler: HomeController.get
});
