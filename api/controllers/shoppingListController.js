'use strict';
var mongoose = require('mongoose'),
Item = mongoose.model('Items');

exports.list_all_items = (req, res, next) => {
  Item.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.create_a_item = (req, res, next) => {
  var new_item = new Item(req.body);
  new_item.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.update_a_item = (req, res, next) => {
  Item.findOneAndUpdate({_id: req.params.itemId}, req.body, {status: false}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.delete_a_item = (req, res, next) => {
  Item.remove({
    _id: req.params.itemId
  }, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'Item successfully deleted' });
  });
};
