// Modules
// ==========================================================

var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	mongoose = require("mongoose");

// Configuration
// ==========================================================

// Database config
var db = require("./config/database");

// Set port
var port = process.env.PORT || 8080;

// MongoDB connection
mongoose.connect(db.url);

// Parse application/json
app.use(bodyParser.json());

// Parse application/vnd.api+json as json
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT.
app.use(methodOverride("X-HTTP-Method-Override"));

// Set static files location
app.use(express.static(__dirname + "/public"));

// Routes
// ==========================================================

require("./app/routes")(app);

// Start App
// ==========================================================

// Start app and listen on port
app.listen(port);

// Server start message
console.log("Server has started on port " + port);

// Expose app
exports = module.exports = app;