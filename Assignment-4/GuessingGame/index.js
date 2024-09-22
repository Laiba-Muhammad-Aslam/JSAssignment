var submitBtn = document.getElementById("submitBtn");
var resultBox = document.getElementById("resultBox");

var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
var noOfGuesses = 10;

function playGame() {
    var guess = document.getElementById("guess").value;
    console.log(guess);
    
    if (noOfGuesses > 0) {
        if (guess < randomNumber) {
            noOfGuesses--;
            resultBox.innerHTML = `
            Your Guess is too low 
            Remaining Guesses: ${noOfGuesses}
            `;
        } else if (guess > randomNumber) {
            noOfGuesses--;
            resultBox.innerHTML = `
            Your Guess is too high 
            Remaining Guesses: ${noOfGuesses}
            `;
        } else {
            resultBox.innerHTML = `
            Congratulations! You've guessed the correct number ${randomNumber}.
            `;
            submitBtn.removeEventListener("click", playGame);
            return;
        }

        if (noOfGuesses === 0) {
            resultBox.innerHTML = `
            Oops! You're out of guesses. The number was ${randomNumber}
            `;
            submitBtn.removeEventListener("click", playGame);
        }
    }
}

submitBtn.addEventListener("click", playGame);
