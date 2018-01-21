
var path = require("path");

var careerList = require("../data/friends.js");

var index;


module.exports = function (app){

	var characters = [];

	app.get("/api/friends", function(req, res) {
	
  	res.json(careerList);
	});


	app.post("/api/friends", function(req, res) {

	  var newcharacter = req.body;


	  // We then add the json the user sent to the character array
	  characters.push(newcharacter);
	 
	  calculateResults(newcharacter);


	  // send the corresponding object from the careerList in the response
	  res.json(careerList[index])


	});



	function calculateResults(newC){

		var userScore = 0

		var diff = 1000

		var friendScore = 0;

		// for each career in the list
		for (var i = 0; i < careerList.length; i++) {
			diffScore = 0;
			//for each question score
			for (var j = 0; j < careerList[0].scores.length; j++) {
				//compare the user score and the career score
				diffScore += Math.abs(newC.scores[j] - parseInt(careerList[i].scores[j]))

			}
			// if the total difference of the current career is less than diff
			if (diffScore < diff){
				diff = diffScore;
				// set index to the current i
				index = i;
			}
			//and continue with the next career in the list

		}

	}

}


