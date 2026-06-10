const questions = [
  {
    text: "What year was Woodstock?",
    answers: [
      "1918",
      "2001",
      "2023",
      "1969"
    ],
    correct: 3  // index of the correct answer in the answers array
  },
  {
    text: "What animal can regenerate almost any part of its body and not leave any scar and can also get a limb transplant from another one of its species?",
    answers: [
      "The Cardinal",
      "The Axolotl",
      "The T-Rex",
      "The Giraffe"
    ],
    correct: 1  // index of the correct answer in the answers array
  },
  {
    text: "What is 'America's favorite pass time?",
    answers: [
        "Football",
        "Soccer",
        "Baseball",
        "Ping Pong"   
    ], 
    correct: 3

  },
  {
    text: "Who was the first African-American Player in professional Baseball?",
    answers: [
        "Jackie Robinson",
        "Mark McGuire",
        "Alex Rodriguez",
        "Wade Boggs"], 
    correct: 0
    }, ]       // ...four more

let currentIndex = 0;
let score = 0    ;
function loadQuestion(index) {
   currentIndex = index;
   questionNumber.textContent =
      ("Question " + (index + 1) + " of " + questions.length).toUpperCase();
   // 2. Update questionNumber.textContent — should read "Question X of Y"
   //    hint: use index + 1 for the display number, questions.length for the total

   questionText.textContent = questions[index].text;
   // 3. Update questionText.textContent with the question's text

   btnsArray.forEach((element, i) => {
      element.textContent = questions[index].answers[i];
      element.className = "answer-btn";
   });
   // 4. Loop over the four answer buttons and for each one:
   //    - Set its textContent to the matching answer from the question object
   //    - Reset its className back to "answer-btn" to clear any leftover .correct / .wrong / .disabled
   //    hint: convert answerBtnsNodeList to a real array first, then use forEach

   // 5. Hide the next button
questionCard.classList.remove("answered");
   // 6. Remove the "answered" class from questionCard
};

const gameTitle            = document.getElementById("game-title");
const scoreDisplay         = document.getElementById("score");
const questionNumber       = document.getElementById("question-number");
const questionText         = document.getElementById("question-text");
const nextBtn              = document.getElementById("next-btn");
const questionCard         = document.getElementById("question-card");
const answerList           = document.getElementById("answer-list");
const endScreen            = document.getElementById("end-screen");
const answerBtnsCollection = document.getElementsByClassName("answer-btn");
const answerBtnsNodeList   = document.querySelectorAll(".answer-btn"); 
const btnsArray            = Array.from(answerBtnsNodeList)
const btnsArray2           = [...answerBtnsNodeList];

console.log(gameTitle);
console.log(scoreDisplay);
console.log(questionNumber);
console.log(questionText);
console.log(nextBtn);
console.log(questionCard);
console.log(answerList);
console.log(endScreen);
console.log(answerBtnsCollection);
console.log(answerBtnsNodeList);
console.log(btnsArray);
console.log(btnsArray2);

// getElementsByClassName returns an HTMLCollection.
// querySelectorAll returns a NodeList.
// To use .map() on either, convert with [Array.from() or [...answerBtnsNodeList].

gameTitle.textContent = "⚡ Quick Fire Trivia";
console.log("First question:", questionText.textContent);
questionNumber.textContent = String(questionNumber.textContent).toUpperCase();

const firstBtn = answerBtnsNodeList[0];
const firstLi = firstBtn.parentElement;

console.log("The first button:", firstBtn);
console.log("Its parent <li>:", firstLi);
console.log("The <ul> that holds all buttons:", firstLi.parentElement);

questionCard.classList.add("answered")
// Look at the browser — does the card look different?

questionCard.classList.remove("answered")
// Back to normal

loadQuestion(0);

