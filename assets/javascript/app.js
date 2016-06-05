$(document).ready(function(){
//VARIABLES

var counter = 60;
var amountCorrect = 0;


//FUNCTIONS

function timer(){
	timer = setInterval(function(){ 
		//show the counter
		$('#timer').html("Time Remaining:<br \>" + counter);

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
	$("#timer").removeClass("hide");
	$("#quiz").removeClass("hide");
	$("#done").removeClass("hide");
}

function quizHide(){
	$("#timer").addClass("hide");
	$("#quiz").addClass("hide");
	$("#done").addClass("hide");
}
function stopTimer() {
    clearInterval(timer);
}
function bs() {
		if (amountCorrect >= 5) {
		$('#bs').append('<img alt="bruuuuuce" src="assets/images/bs1.gif" />');
		$('#score').append("<h2>You're the Boss!</h2>");
		$('#bs2').append('<img alt="bruuuuuce" src="assets/images/bs1.gif" />');

	}

	else {
		$('#score').append("<h2>womp womp</h2>");
		$('#bs').append('<img alt="sad" src="assets/images/cc.gif" />')
		$('#bs2').append('<img alt="sad" src="assets/images/cc.gif" />')

	}
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
	$("#score").html('<h2>All Done!</h2> <p>Correct Answers: ' + amountCorrect );
}

//GAME


//Start game when button is clicked
$("#start").on("click", function(){
 	timer();
 	quizLoad();
});

//Score quiz when user clicks done. Oherwise, score will calculate when time runs out.

$("#done").on("click", function(){
 	quizHide();
 	stopTimer(); 
 	score();
 	showScore();
 	bs();
});


});
