
var newScoreObj = document.querySelector("high-score-container");


// load the stored high scores on high-scores.html page
highScores.push(newScoreObj)
 localStorage.getItem('Highscores', JSON.parse(highScores));