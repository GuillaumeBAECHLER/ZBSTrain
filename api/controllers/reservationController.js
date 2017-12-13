'use strict';
var mongoose = require('mongoose'),
Reservation = mongoose.model('Reservation');

exports.list_reservations = function(req, res) {
  Reservation.find({}, function(err, reservation) {
    if (err)
    res.send(err);
    res.json(reservation);
  });
};

exports.add_reservation = function(req, res) {
  var new_reservation = new Reservation(req.body);
  new_reservation.save(function(err, reservation) {
    if (err)
    res.send(err);
    res.json(reservation);
  });
};

exports.get_reservation = function(req, res) {
  Reservation.findById(req.params.numReservation, function(err, reservation) {
    if (err)
    res.send(err);
    res.json(reservation);
  });
};

exports.update_reservation = function(req, res) {
  Reservation.findOneAndUpdate({numReservation: req.params.numReservation}, req.body, {new: true}, function(err, reservation) {
    if (err)
    res.send(err);
    res.json(reservation);
  });
};

exports.delete_reservation = function(req, res) {
  Reservation.remove({
    numReservation: req.params.numReservation
  }, function(err, reservation) {
    if (err)
    res.send(err);
    res.json({ message: 'Reservation successfully deleted' });
  });
};
