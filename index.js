const questionNumber = document.getElementById("question-number");
const scorePresentation = document.getElementById("score");
const questionText = document.getElementById("question-text");
const quizTitle = document.getElementById("quiz-title");
const svar1 = document.getElementById("svar1");
const svar2 = document.getElementById("svar2");
const svar3 = document.getElementById("svar3");
const svar4 = document.getElementById("svar4");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

let quizQuestions = [
  {
    question: "Vad används console.log() till?",
    answer: [
      "Skapa variabler",
      "Visa data i konsolen",
      "ändra HTML",
      "Köra funktioner",
    ],
    correctAnswer: 1,
  },
  {
    question: "Vad gör operatorn ===?",
    answer: [
      "Jämför bara värden",
      "Jämför bara typ",
      "Jämför både värde och typ",
      "Tilldelar värde",
    ],
    correctAnswer: 2,
  },
  {
    question: "Vad är skillnaden mellan let och const?",
    answer: [
      "Ingen skillnad",
      "const kan ändras, let kan inte",
      "let kan ändras, const kan inte",
      "let används bara i funktioner",
    ],
    correctAnswer: 2,
  },
  {
    question: "Hur många gånger körs denna loop: for (let i = 0; i < 3; i++)?",
    answer: ["2", "3", "4", "Oändligt"],
    correctAnswer: 1,
  },
  {
    question: "Hur hämtar man första elementet i en array?",
    answer: ["array(0)", "array[1]", "array[0]", "array.first()"],
    correctAnswer: 2,
  },
  {
    question: "Vad gör en funktion?",
    answer: [
      "Sparar data",
      "Upprepar kod",
      "Kör kod vid behov",
      "Skapar loopar",
    ],
    correctAnswer: 2,
  },
  {
    question: "Vad gör push()?",
    answer: [
      "Tar bort första elementet",
      "Lägger till i slutet",
      "Sorterar arrayen",
      "Filtrerar",
    ],
    correctAnswer: 1,
  },
  {
    question: "Vad gör .pop()?",
    answer: [
      "Tar bort sista elementet",
      "Lägger till element",
      "Kopierar array",
      "Loopar array",
    ],
    correctAnswer: 0,
  },
];

let score = 0;
let currentQuestionIndex = 0;
let userClick = false;

const Question = () => {
  let currentQuestion = quizQuestions[currentQuestionIndex];

  questionNumber.textContent =
    "Fråga: " + (currentQuestionIndex + 1) + "/" + quizQuestions.length;

  quizTitle.textContent =
    "Besvarade: " +
    currentQuestionIndex +
    " / Kvar: " +
    (quizQuestions.length - currentQuestionIndex);

  scorePresentation.textContent = "Poäng: " + score;

  questionText.textContent = currentQuestion.question;

  svar1.textContent = currentQuestion.answer[0];
  svar2.textContent = currentQuestion.answer[1];
  svar3.textContent = currentQuestion.answer[2];
  svar4.textContent = currentQuestion.answer[3];

  feedback.textContent = "Du måste välja ett svar.";
  userClick = false;

  svar1.style.display = "block";
  svar2.style.display = "block";
  svar3.style.display = "block";
  svar4.style.display = "block";
  nextBtn.style.display = "block";
};

const feedbackAnswer = (userClicked) => {
  let currentQuestion = quizQuestions[currentQuestionIndex];
  let correctAnswer = currentQuestion.correctAnswer;
  let correctText = currentQuestion.answer[correctAnswer];

  if (userClick === true) {
    return;
  }

  userClick = true;

  if (userClicked === correctAnswer) {
    feedback.textContent = "Rätt ✔ Rätt svar är: " + correctText;
    score++;
    scorePresentation.textContent = "Poäng: " + score;
  } else {
    feedback.textContent = "Fel ❌ Rätt svar är: " + correctText;
  }
};

const klarQuiz = () => {
  questionNumber.textContent = "Quiz klar!";
  quizTitle.textContent = "Besvarade: 8 / Kvar: 0";

  scorePresentation.textContent = "Poäng: " + score;

  questionText.textContent = `Quizet är slut! Du fick: ${score} / ${quizQuestions.length}`;
  feedback.textContent = "Bra jobbat!";

  svar1.style.display = "none";
  svar2.style.display = "none";
  svar3.style.display = "none";
  svar4.style.display = "none";
  nextBtn.style.display = "none";
};

svar1.addEventListener("click", () => {
  feedbackAnswer(0);
});

svar2.addEventListener("click", () => {
  feedbackAnswer(1);
});

svar3.addEventListener("click", () => {
  feedbackAnswer(2);
});

svar4.addEventListener("click", () => {
  feedbackAnswer(3);
});

nextBtn.addEventListener("click", () => {
  if (userClick === false) {
    feedback.textContent = "Du måste välja ett svar först.";
    return;
  }

  currentQuestionIndex++;
  feedback.textContent = "";

  if (currentQuestionIndex < quizQuestions.length) {
    Question();
  } else {
    klarQuiz();
  }
});

Question();

function restartQuiz() {
  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    scorePresentation.textContent = "Poäng: " + score;
    feedback.textContent = " ";
    nextBtn.style.display = "unset";
    Question();
  });
}
restartQuiz();
