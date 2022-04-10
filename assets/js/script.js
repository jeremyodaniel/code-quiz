
var startBtn = document.getElementById("start");
var timerEl = document.getElementById('timer');
var currentQuestion = 0
var submitBtn = document.getElementById("submit");


// WHEN I click the start button
//    THEN a timer starts and I am presented with a question

// Timer function
var time = 75;
var interval;

function startQuiz() {
	// CALL timer()
  console.log("GO")
  interval = setInterval(function() {
      time--;
  
  }, 1000);
  timerEl.textContent = time;
	// CALL showQuestion()

	// hide the instructions
	var instructions = document.querySelector(".instructions");
	instructions.parentElement.removeChild(instructions);
	showQuestion();
}; 

function endQuiz() {
	// END AT END OF QUESTIONS OR WHEN TIMER =0
};

function showQuestion() {
	// createEl
	var questionDiv = document.querySelector(".question");
	var form = document.createElement("form")

	var option1 = document.createElement("input");
	option1.setAttribute("type", "radio");
	option1.setAttribute("name", "question" + currentQuestion + 1);
	option1.setAttribute("value", question[currentQuestion].choices[0]);
	option1.setAttribute("id", "option1")

	var option2 = document.createElement("input");
	option2.setAttribute("type", "radio");
	option2.setAttribute("name", "question" + currentQuestion + 1);
	option2.setAttribute("value", question[currentQuestion].choices[1]);
	option2.setAttribute("id", "option2")

	var option3 = document.createElement("input");
	option3.setAttribute("type", "radio");
	option3.setAttribute("name", "question" + currentQuestion + 1);
	option3.setAttribute("value", question[currentQuestion].choices[2]);
	option3.setAttribute("id", "option3")

	var option4 = document.createElement("input");
	option4.setAttribute("type", "radio");
	option4.setAttribute("name", "question" + currentQuestion + 1);
	option4.setAttribute("value", question[currentQuestion].choices[3]);
	option4.setAttribute("id", "option4")

	var label1 = document.createElement("label");
	label1.setAttribute("for", "option1");
	label1.innerHTML = question[currentQuestion].choices[0];

	var label2 = document.createElement("label");
	label2.setAttribute("for", "option2");
	label2.innerHTML = question[currentQuestion].choices[1];

	var label3 = document.createElement("label");
	label3.setAttribute("for", "option3");
	label3.innerHTML = question[currentQuestion].choices[2];

	var label4 = document.createElement("label");
	label4.setAttribute("for", "option4");
	label4.innerHTML = question[currentQuestion].choices[3];

	var button = document.createElement("button");
	button.setAttribute("type", "button");
	button.setAttribute("id", "submit");
	button.innerHTML="submit";

	var br1 = document.createElement("br");
	var br2 = document.createElement("br");
	var br3 = document.createElement("br");
	var br4 = document.createElement("br");

	var legend = document.createElement("legend");
	legend.innerHTML = question[currentQuestion].title;
	form.appendChild(legend)

	form.appendChild(option1)
	form.appendChild(label1)
	form.appendChild(br1)
	form.appendChild(option2)
	form.appendChild(label2)
	form.appendChild(br2)
	form.appendChild(option3)
	form.appendChild(label3)
	form.appendChild(br3)
	form.appendChild(option4)
	form.appendChild(label4)
	form.appendChild(br4)

	form.appendChild(button)

	questionDiv.appendChild(form)
	console.log(question);
};

function checkAnswer() {
	// submit answer
	currentQuestion
	console.log(currentQuestion);
	showQuestion();
	// show next question after answering
	// if answer is incorrect, subtract 10 secs from timer
};

function timer() {
	// MOVE TIMER OUT OF startQuiz()
};




// WHEN I answer a question
//    THEN I am presented with another question
// WHEN I answer a question incorrectly
//    THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
//    THEN the game is over
// WHEN the game is over
//    THEN I can save my initials and score

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", checkAnswer);
