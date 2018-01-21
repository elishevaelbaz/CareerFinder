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


// app.get("/", function(req, res) {
//   console.log("test")
//   res.sendFile(path.join(__dirname, "./app/public/home.html"));
//   console.log("hsdfhdfdfgfhjk")
// });



// we exported and required functions
// so now we have to call the functions
apiRoutes(app);
htmlRoutes(app);




// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "view.html"));
// });

// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "add.html"));
// });

// app.get("/all", function(req, res) {
//   res.sendFile(path.join(__dirname, "all.html"));
// });

// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
