// Modules
// ==========================================================

var mongoose = require("mongoose");

// Schema
// ==========================================================

var UserSchema = mongoose.Schema({
	firstName: { type: String, default: "" },
	lastName: { type: String, default: "" }
});

// Model
// ==========================================================

module.exports = mongoose.model("User", UserSchema);