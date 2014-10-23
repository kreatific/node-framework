// Models
// ==========================================================

var Post = require("../models/post");

// Routes
// ==========================================================

module.exports = function(app) {

	// Route to list all posts
	app.get("/api/posts", function(req, res) {

		console.log("Posts");

		// Route to find all
		Post.find(function(err, posts) {
			if(err) {
				res.send(err);
			} else {
				res.json(posts);
			}
		});
	});

	// Route to handle creation of posts
	// Route to handle update of post
	// Route to handle deletion of post
};