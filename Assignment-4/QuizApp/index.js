var questions = [
    "What is the capital of France?",
    "What is 2 + 2?",
    "Which planet is known as the Red Planet?",
    "What is the largest ocean on Earth?",
    "Who wrote 'Hamlet'?"
];

var options = [
    ["Paris", "London", "Rome", "Berlin"],
    ["3", "4", "5", "6"],
    ["Earth", "Mars", "Jupiter", "Saturn"],
    ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"]
];

var correctAnswers = [0, 1, 1, 0, 0];

var currentQuestion = 0;
var score = 0;
var selectedAnswer = null;

var questionElement = document.getElementById('question');
var answersElement = document.getElementById('answers-buttons');
var nextBtn = document.getElementById('nextBtn');

function loadQuestion() {
    questionElement.textContent = questions[currentQuestion];

    answersElement.innerHTML = '';

    for (var i = 0; i < options[currentQuestion].length; i++) {
        var button = document.createElement('button');
        button.className = "btn w-100 p-2 my-2 text-start";
        button.textContent = options[currentQuestion][i];
        button.setAttribute('data-index', i); 

        button.addEventListener('click', function () {
            selectAnswer(this);
        });

        answersElement.appendChild(button);
    }
}


function selectAnswer(button) {
    var buttons = answersElement.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    button.classList.add('active');

    selectedAnswer = button.getAttribute('data-index');
}

nextBtn.addEventListener('click', function () {
    if (selectedAnswer === null) {
        alert("Please select an answer!");
        return;
    }
    if (parseInt(selectedAnswer) === correctAnswers[currentQuestion]) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        selectedAnswer = null;
        loadQuestion(); 
    } else {
        showResult(); 
    }
});

function showResult() {
    questionElement.textContent = "Quiz Completed!";
    answersElement.innerHTML = "<h3>You scored " + score + " out of " + questions.length + ".</h3>";
    nextBtn.style.display = "none"; 
}

loadQuestion();
