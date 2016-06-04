$(document).ready(function(){
//VARIABLES

var counter = 20;
var amountCorrect = 0;

//FUNCTIONS

function timer(){
	timer = setInterval(function(){ 
		//show the counter
		$('#timer').html(counter);

		//reduce the number of seconds left by 1
			counter--;

		//end game if timer runs out
		if (counter === 0){
	 		stopTimer();
	 		quizHide();
	 		score();
 			showScore();
	 		}

	}, 1000);
}

function quizLoad(){
	$("#start").addClass("hide");
}

function quizHide(){
	$("#quiz").addClass("hide");
}
function stopTimer() {
    clearInterval(timer);
}

function score(){
	for(var i = 1; i <= 8; i++) {
  	var radios = document.getElementsByName("group" + i);
  	for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    	if(radio.value === "p" && radio.checked) {
      	amountCorrect++;
      	console.log(amountCorrect);
    	}
  	}	
	}
}

function showScore(){
	$("#score").addClass("show");
}

//GAME


//Start game when button is clicked
$("#start").on("click", function(){
 	timer();
 	quizLoad();
});

//Score quiz

$("#done").on("click", function(){
 	quizHide();
 	score();
 	showScore();
});


});
