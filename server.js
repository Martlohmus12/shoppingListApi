var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Item = require('./api/models/shoppingListModel'),
  bodyParser = require('body-parser');

var config = require('./config.js');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/itemDB');

mongoose.connect(process.env.MONGODB_URI || config.url);

mongoose.connection.on('error', function(error) {
    console.log('Could not connect to the database. Exiting now...');
    console.log(error);
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/shoppingListRoutes');

app.use('/api', routes);

app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('server started on: ' + port);
