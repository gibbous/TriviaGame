var amountCorrect = 0;

//Score quiz

 $(".button").on("click", function(){
for(var i = 1; i <= 8; i++) {
  var radios = document.getElementsByName("group" + i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value === "correct" && radio.checked) {
      amountCorrect++;
      console.log(amountCorrect);
    }
  }
}
});

