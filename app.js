const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreDisplay = document.getElementById('score-display');
const progressBar = document.getElementById('progress');
const finalScoreText = document.getElementById('final-score-text');
const vibeMessage = document.getElementById('vibe-message');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        text: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        correctIndex: 1
    },
    {
        text: "What is the main purpose of HTML in a web page?",
        options: [
            "To style the page",
            "To define the structure and content",
            "To store data in a database",
            "To handle server-side logic"
        ],
        correctIndex: 1
    },
    {
        text: "Which HTML element is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<p>",
            "<h1>"
        ],
        correctIndex: 1
    },
    {
        text: "Which HTTP method is commonly used to request data from a server?",
        options: [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        correctIndex: 0
    },
    {
        text: "Which of the following is a version control system?",
        options: [
            "Docker",
            "Node.js",
            "Git",
            "NPM"
        ],
        correctIndex: 2
    }
];

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    gameScreen.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
    updateScoreUI();
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    updateProgressBar();
}

function showQuestion(question) {
    questionText.innerText = question.text;
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn', 'option-btn');
        if (index === question.correctIndex) {
            button.dataset.correct = "true";
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hidden');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    // Prevent double clicking
    if (selectedButton.hasAttribute('disabled')) return;

    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        score++;
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
        button.disabled = true; // Disable all buttons after choice
    });

    // Highlight selected specifically if it was wrong, to show what user clicked
    if (!isCorrect) {
        selectedButton.classList.add('wrong');
    }

    updateScoreUI();

    if (questions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hidden');
    } else {
        setTimeout(showResults, 1000);
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function updateScoreUI() {
    scoreDisplay.innerText = `Score: ${score} / ${questions.length}`;
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResults() {
    gameScreen.classList.remove('active');
    resultScreen.classList.add('active');
    finalScoreText.innerText = `You scored ${score} out of ${questions.length}`;

    if (score === 5) {
        vibeMessage.innerText = "Perfect! You are a web basics master, 🎉";
    } else if (score >= 3) {
        vibeMessage.innerText = "Nice job, You have a good understanding of web basics. 👍";
    } else {
        vibeMessage.innerText = "Keep practicing, Review HTML, CSS, and web fundamentals. 💪";
    }
}
