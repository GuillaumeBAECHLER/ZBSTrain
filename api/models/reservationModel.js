'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReservationSchema = new Schema({
  numReservation: {
    type: String,
    required: 'The Reservation Number is not an option'
  },
  currentTrain: {
    type: String,
    ref: 'Train'
  },
  numberPlaces: {
    type: Number
  }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
