// Modules
// ==========================================================

var mongoose = require("mongoose");

// Model
// ==========================================================

module.exports = mongoose.model("Post", {
	title: { type: String, default: "" },
	content: { type: String, default: "" }
});