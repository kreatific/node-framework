// Routes
// ==========================================================

module.exports = function(app) {

    // Route to list all users
    app.get("/firebase", function(req, res) {
        res.sendfile("./public/views/firebase.html");
    });
};