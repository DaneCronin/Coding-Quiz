// create variables to be used for multiple choice quiz:

var startQuizEl = document.querySelector("#start-btn"); // Start Quiz Button
var timeLeftEl = document.querySelector("#time-left"); //countdown timer
var hideStartQuiz = document.querySelector("#start"); // Starting screen of quiz with title and rules
var quizEl = document.querySelector("#questions"); //quiz container element
var questionTitle = document.querySelector("#question-title") // Actual Question
var answerButtons = document.querySelector(".answer-buttons") // Div element to hold ordered list of answer buttons
var answerChoiceEl = document.querySelector("#answer-choice"); // Possible Answer Choice Buttons







// Create an array for all of the question objects
var myQuestions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { a: "Console Log" },
            { b: "Terminal/Bash" },
            { c: "For Loops" },
            { d: "Javascript" },
        ],
        correctAnswer: "a"
    },
    {
        question: "Commonly used data types DO NOT include ",
        answers: [
            { a: "Strings" },
            { b: "Booleans" },
            { c: "Alerts" },
            { d: "Numbers" },
        ],
        correctAnswer: "c"
    },
    {
        question: "What can be stored within Arrays in Javascript?",
        answers: [
            { a: "Numbers and Strings" },
            { b: "Other Arrays" },
            { c: "Booleans" },
            { d: "All of the Above" },
        ],
        correctAnswer: "d"
    },
];




//Setup Start Quiz function

var startQuiz = function (event) {
    console.log("start quiz was initiated");

    // In the click event handler function make the heading "Coding Quiz!" and rules disappear
    if (hideStartQuiz === "none") {
        hideStartQuiz.style.display = "block";
        quizEl.style.display = "none";

    }
    else {
        hideStartQuiz.style.display = "none";
        quizEl.style.display = "block";

    }

    quizQuestions();
}; // End Start Quiz Function


//     // Return Quiz - Show the first question and set of answers 
// function quizQuestions() {
//     console.log("quiz questions");

//     //create array to store all of the output and answer choices
//     var output = []; 
//     //variable to store all of the answers
//     var answers = [];  
//     //for each question, iterate through with for loop

//     for (var i = 0; i < myQuestions.length; i++) {

//         //console.log("QUESTION");
//         answers = window.prompt(myQuestions[i].question);

//         if (answers == myQuestions[i].correctAnswer) {
//             console.log("question1");
//             score++;
//             alert("Correct!");
//         } else {
//             alert("Wrong!");
//             countdown(timeLeftEl - 10000);
//         }
//     };


//     //     // for each available answer to this question...
//     //     for(letter in myQuestions[i].answers){

// 	// 		// ...add question buttons
// 	// 		answers.push(
// 	// 			'<label>'
// 	// 				+ '<input type="button" name="question'+i+'" value="'+letter+'">'
// 	// 				+ letter + ': '
// 	// 				+ myQuestions[i].answers[letter]
// 	// 			+ '</label>'
// 	// 		);
// 	// 	}

// 	// 	// add this question and its answers to the output
// 	// 	output.push(
// 	// 		'<div class="question">' + myQuestions[i].question + '</div>'
// 	// 		+ '<div class="answers">' + answers.join('') + '</div>'
// 	// 	);
// 	// }
//     // //combine output list into one string of html and put it on the page
// 	// quizEl.innerHTML = output.join('');

//     //  quizQuestions(myQuestions, quizEl);

// }; // End return quiz function





// Function to start a timer when "Start Quiz!" button is clicked.
startQuizEl.addEventListener("click", function () {
    countdown();
    startQuiz();

});

function countdown() {
    console.log("countdown function was called");
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        timeLeftEl.innerHTML = timeLeft;
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            alert("Sorry, out of time");
        }

    }, 1000);

};








// Setup a questions function to display question with answer choices.
function quizQuestions() {
    console.log("Quiz Question Started");
    // Variable to store the score
    var score = [];

    for (var i = 0; i < myQuestions.length; i++) {
        questionTitle.innerText = myQuestions[i].question;

        //Add possible answers to buttons to choose Answer
        myQuestions[i].answers.forEach(answer => {
            answerButtons = document.createElement('button');
            answerChoiceEl.innerText = answer.text
            answerChoiceEl.classList.add('btn')

            //Get answer choice and compare to answer
            if (answer.correct) {

                // If it is correct answer, add points and show next question and choices.
                button.dataset.correct = answer.correct
                //  score ++;
                // alert("Correct!");
            } else {
                // alert("WRONG!");
            }

            answerChoiceEl.addEventListener('click', selectAnswer);
            answerButtons.appendChild(answerChoiceEl);

        });

    }

    // If it is the wrong answer, deduct 10 seconds from timer

    // If it is correct answer, add points and show next question and choices.

}; // End quizQuestions Function

// Create Function to clear all answers and questions to move on to next question




function selectAnswer(event) {

}



// Create function to run all questions or if timer runs out, game is over.

    //When all questions have been answered or timer runs out, user can save name and score


// Create function to store and save user's name and score to High Scores lists


// Create function to load the stored high scores on high-scores.html page
