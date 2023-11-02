document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.querySelector(".quiz-container");
    const resultContainer = document.querySelector(".result-container");

    let currentQuestion = 0;
    let score = 0;

    const questions = [
        {
            question: "What is the capital of France?",
            options: ["New York", "London", "Paris", "Dublin"],
            answer: "Paris",
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
            answer: "Leonardo Da Vinci",
        },
        {
            question: "What is the capital of India?",
            options: ["Delhi", "Kolkata", "Mumbai", "UP"],
            answer: "Delhi",
        },
    ];

    const questionElement = document.querySelector(".question");
    const optionsElement = document.querySelector(".options");

    function showQuestion(question) {
        questionElement.textContent = question.question;
        optionsElement.innerHTML = "";
        question.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option));
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selectedAnswer) {
        if (selectedAnswer === questions[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion(questions[currentQuestion]);
        } else {
            showResult();
        }
    }

    function showResult() {
        quizContainer.style.display = "none";
        resultContainer.style.display = "block";
        document.querySelector(".score").textContent = score + " / " + questions.length;
    }

    showQuestion(questions[currentQuestion]);
});
