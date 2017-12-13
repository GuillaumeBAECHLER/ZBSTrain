var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Train = require('./api/models/trainModel'),
  Reservation = require('./api/models/reservationModel'),
  bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tsauvajon:huit@cluster0-shard-00-00-lbcnx.mongodb.net:27017,cluster0-shard-00-01-lbcnx.mongodb.net:27017,cluster0-shard-00-02-lbcnx.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');


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
