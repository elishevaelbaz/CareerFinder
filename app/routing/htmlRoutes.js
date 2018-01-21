var path = require("path");

module.exports = function (app){

app.get("/survey", function(req, res) {
	console.log(__dirname)
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/", function(req, res) {
	console.log("test")
  res.sendFile(path.join(__dirname, "./../public/home.html"));
  console.log("hsdfhdfdfgfhjk")
});

}

// module.exports = expressify;

