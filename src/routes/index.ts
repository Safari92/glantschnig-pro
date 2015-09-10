/// <reference path="../../typings/node/node.d.ts" />
var fs          = require('fs');
var path        = require('path');
var routes      = {};

var dirname = path.join(__dirname);

fs
  .readdirSync(dirname)
  .filter(function(file) {
    var ext = file.split('.').pop();
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (ext === 'js');
  })
  .forEach(function(file) {
    // use the filename as objectname
    var filename = file.split('.')[0];
    routes[filename] = require(path.join(dirname, file));
  });


module.exports = routes;