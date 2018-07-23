
// require NPM packages dependencies
var bodyParser = require("body-parser");
var express = require("express");


// express server set up for node
var app = express();
// Sets the server port
var PORT = process.env.PORT || 8080;

// Set up for data parsing and parse application json
app.use(bodyParser.urlencoded({ extended: true}));
app,use(bodyParser.json())

// gives the server our routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listen function which starts our server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
