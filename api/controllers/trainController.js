'use strict';
var mongoose = require('mongoose'),
Train = mongoose.model('Train');

exports.list_trains = function(req, res) {
  Train.find({}, function(err, train) {
    if (err)
    res.send(err);
    res.json(train);
  });
};

exports.add_train = function(req, res) {
  var new_train = new Train(req.body);
  new_train.save(function(err, train) {
    if (err)
    res.send(err);
    res.json(train);
  });
};

exports.get_train = function(req, res) {
  Train.findOne({'numTrain': req.params.numTrain}, function(err, train) {
    if (err)
    res.send(err);
    res.json(train);
  });
};

exports.update_train = function(req, res) {
  Train.findOneAndUpdate({numTrain: req.params.numTrain}, req.body, {new: true}, function(err, train) {
    if (err)
    res.send(err);
    res.json(train);
  });
};

exports.delete_train = function(req, res) {
  Train.remove({
    numTrain: req.params.numTrain
  }, function(err, train) {
    if (err)
    res.send(err);
    res.json({ message: 'Train successfully deleted' });
  });
};
