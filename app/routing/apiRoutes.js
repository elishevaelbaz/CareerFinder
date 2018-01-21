var path = require("path");

var friendList = require("../data/friends.js");

var closestMatch;

var index;




module.exports = function (app){

	var characters = [];

app.get("/api/friends", function(req, res) {
	
  res.json(friendList);
});


app.post("/api/friends", function(req, res) {
  // res.sendFile(path.join(__dirname, "../public/home.html"));

  var newcharacter = req.body;


  console.log("HItting post route")

  console.log("test" + newcharacter);

  // We then add the json the user sent to the character array
  characters.push(newcharacter);

  


  //logic here!!!!!!!!!!

  calculateResults(newcharacter);

  // if (tableData.length < 5) {
  //     tableData.push(req.body);
  //     res.json(true);
  //   }
  //   else {
  //     waitListData.push(req.body);
  //     res.json(false);
  //   }

  // sending the friend
  res.json(friendList[index])


  // We then display the JSON to the users
  // res.json(newcharacter);

});



	function calculateResults(newC){

		var userScore = 0

		var diff = 1000

		var friendScore = 0;

		// var closestMatch;

		for (var i = 0; i < friendList.length; i++) {
			diffScore = 0;
			for (var j = 0; j < friendList[0].scores.length; j++) {
				console.log("enteredScore " + newC.scores[j])
				console.log("friendScore " + parseInt(friendList[i].scores[j]))
				diffScore += Math.abs(newC.scores[j] - parseInt(friendList[i].scores[j]))

				console.log("i is : " + i + "diffscore: " + diffScore);

			}
			if (diffScore < diff){
				diff = diffScore;

				console.log("You are here")
				index = i;
				closestMatch = friendList[i].name;

			}

			
		}
		console.log(closestMatch)
		// $('#myModal').modal("show");
		// Math.abs(2+3)

	}

}

// module.exports = expressify;

