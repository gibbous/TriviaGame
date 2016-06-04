var amountCorrect = 0;
var questions =[];

//the question
//the choices
//the answer

var questions = [{
		question: 'What color is the sky?',
		choices: ['blue', 'red', 'green'],
		answer: 0
}
};
//start timer
//Score quiz

 $(".button").on("click", function(){
for(var i = 1; i <= 8; i++) {
  var radios = document.getElementsByName("group" + i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value === "right" && radio.checked) {
      amountCorrect++;
      console.log(amountCorrect);
    }
  }
}

alert("You got " +amountCorrect + " correct!");
});

