/**
 * glantschnig.pro
 *
 * Entry point of the application
 *
 */

var Hapi = require('hapi');
var config = require('./config/');

var server = new Hapi.Server();
server.connection({ port: config.port });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});