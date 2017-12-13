'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TrainSchema = new Schema({
  numTrain: {
    type: String,
    required: 'The num train is not an option'
  },
  villeDepart: {
    type: String
  },
  villeArrivee: {
    type: String
  },
  heureDepart: {
    type: Date
  }
});

module.exports = mongoose.model('Train', TrainSchema);
