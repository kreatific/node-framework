// Modules
// ==========================================================

var mongoose = require("mongoose");

// Model
// ==========================================================

module.exports = mongoose.model("User", {
	firstName: { type: String, default: "" },
	lastName: { type: String, default: "" }
});