'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoppingListSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the item'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Items', ShoppingListSchema);