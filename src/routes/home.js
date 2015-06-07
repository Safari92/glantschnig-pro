var server = require('../app');
var homeController = require('../controller/homeController');

server.route({
  method: 'GET',
  path: '/',
  handler: homeController.get
});
