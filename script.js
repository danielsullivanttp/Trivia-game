const gameTitle = document.getElementById("game-title");
const scoreDisplay = document.getElementById("score");
const questionNumber = document.getElementById("questionNumber");
const questionText   = document.getElementById("questionText");
const nextBtn        = document.getElementById("nextBtn");
const questionCard   = document.getElementById("questionCard");
const answerList     = document.getElementById("answerList");
const endScreen      = document.getElementById("endScreen");
const answerBtnsCollection = document.getElementsByClassName("answer-btn");
const answerBtnsNodeList = document.querySelectorAll(".answer-btn"); 
const btnsArray = Array.from(answerBtnsNodeList)
const btnsArray2 = [...answerBtnsNodeList];

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