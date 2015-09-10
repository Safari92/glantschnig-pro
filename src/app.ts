/// <reference path="../typings/node/node.d.ts" />
/**
 * initializing the Server Instance
 */

var Hapi = require('hapi');
var Good = require('good');
var config = require('./config/');

var server = new Hapi.Server();
server.connection({ port: config.port });

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, function (err) {
  if (err) {
    throw err; // something bad happened loading the plugin
  }

  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});

module.exports = server;