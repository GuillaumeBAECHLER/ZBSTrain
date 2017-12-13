'use strict';
module.exports = function(app) {
  var reservation = require('../controllers/reservationController');

  // reservation Routes
  app.route('/reservation')
    .get(reservation.list_reservations)
    .post(reservation.add_reservation);


  app.route('/reservation/:numReservation')
    .get(reservation.get_reservation)
    .put(reservation.update_reservation)
    .delete(reservation.delete_reservation);
};
