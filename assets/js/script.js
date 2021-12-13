
// WHEN I click the start button
//    THEN a timer starts and I am presented with a question
var buttonEl = document.querySelector("#start");

// Timer function
var time = 75;
var interval;

var startQuiz = function() {
    event.preventDefault();
    console.log("GO")
    interval = setInterval(function() {
        time--;
    
    }, 1000);
    console.log(time);
}; 





// WHEN I answer a question
//    THEN I am presented with another question
// WHEN I answer a question incorrectly
//    THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
//    THEN the game is over
// WHEN the game is over
//    THEN I can save my initials and score

buttonEl.addEventListener("click", startQuiz);
