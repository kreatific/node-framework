// Modules
// ==========================================================

var mongoose = require("mongoose");

// Schema
// ==========================================================

var PostSchema = mongoose.Schema({
	title: { type: String, default: "" },
	content: { type: String, default: "" }
});

// Model
// ==========================================================

module.exports = mongoose.model("Post", PostSchema);