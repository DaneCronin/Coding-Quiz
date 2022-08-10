//Create function to store and save user's name and score to High Scores lists

 var newScoreObj = {score: timeLeft , initials}

    var highScores = JSON.parse(localStorage.getItems('Highscores')) || []

    
//Create function to load the stored high scores on high-scores.html page
highScores.push(newScoreObj)
 localStorage.setItem('Highscores', JSON.stringify(highScores))