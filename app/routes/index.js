// Modules
// ==========================================================

var User = require("../models/user");

// Routes
// ==========================================================

module.exports = function(app) {

	// Other routes
	require("./posts")(app);
	require("./users")(app);

	// Catch-all route
	app.get("*", function(req, res) {
		res.sendfile("./public/index.html");
	});
};