var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  }
});


module.exports = mongoose.model('User', UserSchema);