//Dependencies
var restful = require('node-restful');
var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
  name: String
});