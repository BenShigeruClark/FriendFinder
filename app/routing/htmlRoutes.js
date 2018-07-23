
// Using the path npm package dependency
var path = require('path');
// Routing
module.exports = function(app) {
    // Get requests for html page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
    // Default to home page if there are no matches
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));


    });


};