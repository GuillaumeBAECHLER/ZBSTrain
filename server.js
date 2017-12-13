var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Train = require('./api/models/trainModel'),
  Reservation = require('./api/models/reservationModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Traindb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 //importing routes
var trainRoutes = require('./api/routes/trainRoutes');
var reservationRoutes = require('./api/routes/reservationRoutes');

//register the route
trainRoutes(app);
reservationRoutes(app);


app.listen(port);


console.log('ZBSTrain ' + port);
