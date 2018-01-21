// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes")

// Sets up the Express App
// =============================================================
var app = express();

// static routing
app.use(express.static(path.join(__dirname, "app/public")))


var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// we exported and required functions
// so now we have to call the functions
apiRoutes(app);
htmlRoutes(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
