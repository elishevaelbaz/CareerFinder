

// function radioVals(){

// 	for (var i = 0; i < Things.length; i++) {
// 		Things[i]
// 	}
// }

	$(document).on("click", "#submit", function() {
		event.preventDefault();
		console.log($('input[name=optradio1]:checked').attr('id'));
		// calculateResults();
	});


// 	function calculateResults(){

// 	var counter = 0;
// 	var incorrectCounter = 0;

// 	for (var i = 0; i < array.length; i++) {
// 		var x = document.getElementById("question"+(i+1)+"choice1").checked;
// 		var y = document.getElementById("question"+(i+1)+"choice2").checked;
// 		var z = document.getElementById("question"+(i+1)+"choice3").checked;
// 		if (x){
// 			counter++
// 		}

// 		//calculate how many were answered incorrectly so 
// 		// can see how many unanswered
// 		else if ((y)||(z)){
// 			incorrectCounter++
// 		}

// 	}

// 	displayResults(counter, incorrectCounter)

// };