// Models
// ==========================================================

var User = require("../models/user");

// Routes
// ==========================================================

module.exports = function(app) {

	// Route to list all users
	app.get("/api/users", function(req, res) {

		console.log("Users");

		// Route to find all
		User.find(function(err, users) {
			if(err) {
				res.send(err);
			} else {
				res.json(users);
			}
		});
	});

	// Route to handle creation of users
	// Route to handle update of user
	// Route to handle deletion of user
};