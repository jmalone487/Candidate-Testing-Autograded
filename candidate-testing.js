const input = require('readline-sync');

// TODO 1.1a: Define candidateName
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


// Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name
  candidateName = input.question("Please enter your name: ");

  // TODO 1.1c: Greet candidate using their name
  console.log(`Hello, ${candidateName}! Welcome to the quiz.\n`);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the questions and assign the responses as candidateAnswer
  for (let i = 0; i < questions.length; i++) {
    question = questions[i];
    correctAnswer = correctAnswers[i];
    candidateAnswer = input.question(question);
    candidateAnswers.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the questions correctly or incorrectly
  let numberCorrect = 0;
  console.log("\nQuiz Results:");
  for (let i = 0; i < questions.length; i++) {
    let candidateResponse = candidateAnswers[i].trim().toLowerCase();
    let correctResponse = correctAnswers[i].trim().toLowerCase();
    if (candidateResponse === correctResponse) {
      numberCorrect++;
    }
    console.log(`\nQuestion ${i + 1}: ${questions[i]}`);
    console.log(`Your answer: ${candidateAnswers[i]}`);
    console.log(`Correct answer: ${correctAnswers[i]}`);
  }

  let grade = (numberCorrect / questions.length) * 100;

  console.log(`\n>>> Overall Grade: ${grade}% (${numberCorrect} of ${questions.length} responses correct) <<<`);
  console.log(">>> Status: " + (grade >= 80 ? "PASSED" : "FAILED") + " <<<");

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name
  console.log(`Hello, ${candidateName}!\n`);
  askQuestion();
  gradeQuiz(candidateAnswers);
}
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};