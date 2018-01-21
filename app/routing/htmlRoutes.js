
var path = require("path");

module.exports = function (app){



	app.get("/:input?", function(req, res) {

		var input = req.params.input;

		switch (input){

			case "survey":
				res.sendFile(path.join(__dirname, "../public/survey.html"));
				break;

			// default/catch all route - leads to home page
			default:
				res.sendFile(path.join(__dirname, "./../public/home.html"));
				break;

		}
	  
	});

}



