// create variables to be used for multiple choice quiz:

var startQuizEl = document.querySelector("#start-btn"); // Start Quiz Button
var timeLeftEl = document.querySelector("#time-left"); //countdown timer
var hideStartQuiz = document.querySelector("#start"); // Starting screen of quiz with title and rules
var quizEl = document.querySelector("#questions"); //quiz 
var answerChoiceEl = document.querySelector("#answer-choice"); //results






// Create an array for all of the question objects
var myQuestions = [
	{
		question: "A very useful tool used during development and debugging for printing content to the debugger is:",
		answers: {
			a: "Console Log",
			b: "Terminal/Bash",
			c: "For Loops",
            d: "Javascript",
		},
		correctAnswer: "a"
	},
	{
		question: "Commonly used data types DO NOT include ",
		answers: {
			a: "Strings",
			b: "Booleans",
			c: "Alerts",
            d: "Numbers",
		},
		correctAnswer: "c"
	},
    {
		question: "What can be stored within Arrays in Javascript?",
		answers: {
			a: "Numbers and Strings",
			b: "Other Arrays",
			c: "Booleans",
            d: "All of the Above",
		},
		correctAnswer: "d"
	},
];




//Setup Start Quiz function

var startQuiz = function(event) {
    console.log("start quiz was initiated");
    // In the click event handler function make the heading "Coding Quiz!" and rules disappear
    if (hideStartQuiz === "none") {
        hideStartQuiz.style.display = "block";
    }
    else {
        hideStartQuiz.style.display = "none";
    }

    quizQuestions();
}; // End Start Quiz Function


    // Return Quiz - Show the first question and set of answers 
function quizQuestions() {
    console.log("quiz questions");
    
    //create array to store all of the output and answer choices
    var output = []; 
    //variable to store all of the answers
    var answers = [];  
    //for each question, iterate through with for loop

    for (var i = 0; i < myQuestions.length; i++) {
      
        //console.log("QUESTION");
        answers = []; //reset the answers

        // for each available answer to this question...
        for(letter in myQuestions[i].answers){

			// ...add question buttons
			answers.push(
				'<label>'
					+ '<input type="button" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ myQuestions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + myQuestions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}
    //combine output list into one string of html and put it on the page
	quizEl.innerHTML = output.join('');

     quizQuestions(myQuestions, quizEl);

}; // End return quiz function
  



  // Function to start a timer when "Start Quiz!" button is clicked.
  startQuizEl.addEventListener("click", function() {
    countdown();
   startQuiz();

});

function countdown() {
    console.log("countdown function was called");
    var timeLeft= 75;

    var timeInterval = setInterval(function () {
        timeLeftEl.innerHTML = timeLeft;
        timeLeft -- ; 
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            alert("Sorry, out of time");
        }

    }, 1000);

        };

  


    
 
    




// Setup a questions function to display question with answer choices.

    //Create 4 buttons, one for each choice in an ordered list

    //Get answer choice and compare to answer

         //Display Correct! if correct answert, wrong if it is the wrong answer!
    
        // If it is the wrong answer, deduct 10 seconds from timer

        // If it is correct answer, add points and show next question and choices.



// Create function to run all questions or if timer runs out, game is over.

    //When all questions have been answered or timer runs out, user can save name and score


// Create function to store and save user's name and score to High Scores lists


// Create function to load the stored high scores on high-scores.html page
