'use strict';
module.exports = function(app) {
  var train = require('../controllers/trainController');

  // todoList Routes
  app.route('/api/trains')
    .get(train.list_trains)
    .post(train.add_train);


  app.route('/api/trains/:numTrain')
    .get(train.get_train)
    .put(train.update_train)
    .delete(train.delete_train);
};
