var newScoreObj = document.querySelector("high-score-container");



    
// load the stored high scores on high-scores.html page
highScores.push(newScoreObj)
 localStorage.setItem('Highscores', JSON.stringify(highScores))