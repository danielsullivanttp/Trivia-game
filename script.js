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

answerList.addEventListener("click", (event) => {
   if(event.target.tagName !== "BUTTON") {
      return;
   }
   // 1. If the click was not on a BUTTON element, return early and do nothing
   //    hint: check event.target.tagName — it will be the string "BUTTON" if a button was clicked
   
   const clickedIndex = btnsArray.indexOf(event.target);
   // 2. Store the clicked button and figure out which index it is in the list
   //    hint: convert answerBtnsNodeList to an array and use .indexOf(event.target)

   const correctIndex = questions[currentIndex].correct;
   // 3. Get the correct answer index from the current question in the data array

   if(clickedIndex === correctIndex) {
      event.target.classList.add("correct");
      score++;
      scoreDisplay.textContent = score;
   } else {
      event.target.classList.add("wrong");
      btnsArray[correctIndex].classList.add("correct");
   }
   // 4. Compare: did the player pick the right one?
   //    - If correct: add the "correct" class to the clicked button, increment score,
   //      and update scoreDisplay.textContent
   //    - If wrong: add the "wrong" class to the clicked button,
   //      and add "correct" to the button at the correct index to reveal it
   
   btnsArray.forEach((btn) => {
      btn.classList.add("disabled");
   });
   // 5. Disable all four answer buttons so the player can't change their answer
   //    hint: convert to a real array and use forEach to add "disabled" to each
   
   questionCard.classList.add("answered");
   nextBtn.classList.remove("hidden");
   // 6. Add "answered" to questionCard and remove "hidden" from nextBtn   
});

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

// Why does clicking a button inside #answer-list trigger this listener?
// Answer: Because of bubbling- When I click a button it bubbles up through the DOM tree.

// What is the difference between event.target and event.currentTarget here?
// event.target  → The actual button element that was pressed
// event.currentTarget → The answer-list elemnt where the listener is attached