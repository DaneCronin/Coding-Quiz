// create variables to be used for multiple choice quiz:

var startQuizEl = document.querySelector("#start-btn"); // Start Quiz Button
var timeLeftEl = document.querySelector("#time-left"); //countdown timer
var hideStartQuiz = document.querySelector("#start"); // Starting screen of quiz with title and rules
var quizEl = document.querySelector("#questions"); //quiz container element
var questionTitle = document.querySelector("#question-title") // Actual Question
var answerButtons = document.querySelector(".answer-buttons") // Div element to hold ordered list of answer buttons
// var answerChoiceEl = document.querySelector("#answer-choice"); // Possible Answer Choice Buttons
var endQuizEl = document.querySelector(".end-quiz")// End of Quiz screen to show score and input for user name to save score
var currentIndex = 0
    // Variable to store the score
    var score = [];
    var timeLeft = 75;





// Create an array for all of the question objects
var myQuestions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
             "Console Log" ,
              "Terminal/Bash" ,
              "For Loops" ,
             "Javascript" ,
        ],
        correctAnswer: "a"
    },
    {
        question: "Commonly used data types DO NOT include ",
        answers: [
              "Strings" ,
             "Booleans" ,
              "Alerts" ,
              "Numbers" ,
        ],
        correctAnswer: "c"
    },
    {
        question: "What can be stored within Arrays in Javascript?",
        answers: [
             "Numbers and Strings" ,
              "Other Arrays" ,
             "Booleans" ,
              "All of the Above" ,
        ],
        correctAnswer: "d"
    },
];




//Setup Start Quiz function
endQuizEl.style.display = "none";
quizEl.style.display = "none";

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



// Function to start a timer when "Start Quiz!" button is clicked.
startQuizEl.addEventListener("click", function () {
    countdown();
    startQuiz();

});

function countdown() {
    console.log("countdown function was called");
  

    var timeInterval = setInterval(function () {
        timeLeft--;
        timeLeftEl.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            alert("Sorry, out of time");
        }
    }, 1000);

};




// Setup a questions function to display question with answer choices.
function quizQuestions() {
    console.log("Quiz Question Started");
    console.log(myQuestions[currentIndex])
        answerButtons.innerHTML = ''
        questionTitle.innerText = myQuestions[currentIndex].question;

        //Add possible answers to buttons to choose Answer
        myQuestions[currentIndex].answers.forEach(answer => {
            var answerButton = document.createElement('button');
            answerButton.innerText = answer;
            answerButton.classList.add('btn');
            answerButton.onclick = selectAnswer
            answerButtons.append(answerButton);

        });

    

    

}; // End quizQuestions Function

// Create Function to clear all answers and questions to move on to next question

function selectAnswer() {
        var currentAnswer = myQuestions[currentIndex].correctAnswer
        var clickedAnswer = this.innerText
        console.log(`ClickedAnswer: ${clickedAnswer}
        CorrectAnswer: ${currentAnswer}`)
            //Get answer choice and compare to answer
            // If it is the wrong answer, deduct 10 seconds from timer
            if (currentAnswer !== clickedAnswer)  {
                timeLeft -= 10} else {
                // If it is correct answer, add points and show next question and choices.
        
                 score ++;
            } ;
            currentIndex++
            if(currentIndex === myQuestions.length){
                endQuiz();
            } else {
                quizQuestions()
            }
        
        }

// Create function for end of quiz when all questions have been answered or time has run out.
function endQuiz() {
    console.log("End Quiz");
    quizEl.style.display = "none";
    endQuizEl.style.display = "block";
   
    // if (timeLeft == 0 || currentIndex == myQuestions.length) {

    //  }
}

  //When all questions have been answered or timer runs out, user can save name and score

//Create function to store and save user's name and score to High Scores lists
function highScore() {
var newScoreObj = {score: timeLeft , initials}

var highScores = JSON.parse(localStorage.getItems('Highscores')) || []
};
    