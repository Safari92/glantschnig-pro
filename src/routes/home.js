var server = require('../app');
var homeController = require('../controllers/homeController');

server.route({
  method: 'GET',
  path: '/',
  handler: homeController.get
});
