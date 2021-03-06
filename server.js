// Required dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require('method-override');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Serve static content for the app from the public folder
app.use(express.static("public"));

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Import routes and give the server access to them
var routes = require('./controllers/burgerControllers.js');
app.use('/', routes);

// Start our server so it can listen for requests from the client
app.listen(process.env.PORT || 8080);
