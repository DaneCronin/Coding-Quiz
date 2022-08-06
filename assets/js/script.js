// create variables to be used for multiple choice quiz:
var startQuizEl = document.querySelector("#start-btn");
var timeLeftEL = document.querySelector("#time-left");
var hideStartQuiz = document.querySelector("#start");
var questionEL = document.querySelector("#questions");
var answerChoiceEl = document.querySelector("#answer-choice");


//Setup Start Quiz function

var startQuiz = function() {

    // In the click event handler function make the heading "Coding Quiz!" and rules disappear
    if (hideStartQuiz === "none") {
        hideStartQuiz.style.display = "block";
    }
    else {
        hideStartQuiz.style.display = "none";
    };
     
    // Return Quiz - Show the first question and set of answers 




}; // End Start Quiz Function


    // Function to start a timer when "Start Quiz!" button is clicked.
    document.getElementById("#start-btn").addEventListener("click", function(countdown));

function countdown() {
    var timeLeft= 75;

    var timeInterval = setInterval(function () {
        if(timeLeft > 0) {
            timeLeft --; 
        }
        else {
            clearInterval(timeInterval);
            return "You're out of time!";
        }

    }, 1000);
        }

    
 
    




// Setup a questions function to display question with answer choices.

    //Create 4 buttons, one for each choice in an ordered list

    //Get answer choice and compare to answer

         //Display Correct! if correct answert, wrong if it is the wrong answer!
    
        // If it is the wrong answer, deduct 10 seconds from timer

        // If it is correct answer, add points and show next question and choices.



// Create function to run all questions or if timer runs out, game is over.

    //When all questions have been answered or timer runs out, user can save name and score


// Create function to store and save user's name and score to High Scores list


// Create function to load the stored high scores on high-scores.html page


