const questions = [
  {
    text: "What year was Woodstock?",
    answers: [
      "1918",
      "2001",
      "2023",
      "1969"
    ],
    correct: 3  // index of the correct answer in the answers array.
  },
  {
    text: "What animal can regenerate almost any part of its body and not leave any scar and can also get a limb transplant from another one of its species?",
    answers: [
      "The Cardinal",
      "The Axolotl",
      "The T-Rex",
      "The Giraffe"
    ],
    correct: 1  // index of the correct answer in the answers array.
  },
  {
    text: "What is 'America's favorite pass time?",
    answers: [
        "Football",
        "Soccer",
        "Baseball",
        "Ping Pong"   
    ], 
    correct: 2 // index of the correct answer in the answers array.

  },
  {
    text: "Who was the first African-American Player in professional Baseball?",
    answers: [
        "Jackie Robinson",
        "Mark McGuire",
        "Alex Rodriguez",
        "Wade Boggs"], 
    correct: 0 // index of the correct answer in the answers array.
    }, ]       // ...four more

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

let currentIndex = 0;
let score = 0    ;

function loadQuestion(currentIndex) {
   // Answer Key: 
   // const currentQuestion = questions[index];
   // const currNum = index +1;

   // questionNumber = "Question " + currNum  + " of " + questions.length;

   // questionText.textContent = currentQuestion.text;

   // answerBtnsNodeList.forEach((btn, idx)){
   // btn.textContent = currentQuestion.answers[idx];

   // btn.className = 'answer-btn';
   // })
   // nextBtn.classList.add('hidden');
   // questionCard.classList.remove('answered');       
   
  const currentQuestion = questions[currentIndex];
  const currNum = currentIndex + 1;
   
   questionNumber.textContent = "Question " + currNum + " of " + questions.length
   // 2. Update questionNumber.textContent — should read "Question X of Y"
   //    hint: use index + 1 for the display number, questions.length for the total

   questionText.textContent = currentQuestion.text;
   // 3. Update questionText.textContent with the question's text

   answerBtnsNodeList.forEach((btn, idx) => {
   btn.textContent = currentQuestion.answers[idx];
  
   btn.className = 'answer-btn';
  }) 
   // 4. Loop over the four answer buttons and for each one:
   //    - Set its textContent to the matching answer from the question object
   //    - Reset its className back to "answer-btn" to clear any leftover .correct / .wrong / .disabled
   //    hint: convert answerBtnsNodeList to a real array first, then use forEach
  nextBtn.classList.add('hidden');
   // 5. Hide the next button
  questionCard.classList.remove('answered');
   // 6. Remove the "answered" class from questionCard
 };

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

answerList.addEventListener('click', (event) => {
   // if(event.target.tagName !== 'BUTTON') return
   if(event.target.tagName !== 'BUTTON') return
   if(event.target.classList.contains('disabled')) return;
   // 1. If the click was not on a BUTTON element, return early and do nothing
   //    hint: check event.target.tagName — it will be the string "BUTTON" if a button was clicked
   
   // const selectedIdx = [...answerBtnNodeList].indexOf(event.target); - THis will look for the index number of the button clicked

   // const correctIdx = questions[currentIndex].correct;
  
   // if(selectedIdx === correctIdx){
   // event.target.classList.add('correct');
   //
   // console.log('old score, score);
   // score++;
   // console.log('new score');
   // 
   // or: 
   // scoreDisplay.textContent = score; 
   // }
   //
   // else{
   //    event.tatget.classList.add('wrong');
   //    [..answerBtnNodeList][correctIdx].classList.add('correct') 
   // }
   //  
   // answerBtnNodeList.forEaxh(btn) => {
   //   btn.classList.add('disabled'); 
   // }
   // 
   // questionCard.classList.add('answered'):
   // nextBtn.classList.remove('hidden');
   // 
   //
   //
   //
   const selectedIdx = [...answerBtnsNodeList].indexOf(event.target);
   const correctIdx = questions[currentIndex].correct;
   
   if(selectedIdx === correctIdx){
   event.target.classList.add('correct');
  
   console.log('oldscore, score');
   score++;
   scoreDisplay.textContent = score; 
}
    else{
       event.target.classList.add('wrong');
        [...answerBtnsNodeList][correctIdx].classList.add('correct');  
    }
     
    answerBtnsNodeList.forEach((btn) => {
      btn.classList.add('disabled'); 
    })
   
    questionCard.classList.add('answered');
    // nextBtn.classList.remove('hidden');

    answerBtnsNodeList.forEach((btn) => {
       btn.classList.add('disabled');
    });

    questionCard.classList.add('answered');

    setTimeout(() => {
    currentIndex++;
    
    if (currentIndex < questions.length) {
       loadQuestion(currentIndex);
    } else {
       showEndScreen();
    }}, 700);  
    // 2. Store the clicked button and figure out which index it is in the list
    //    hint: convert answerBtnsNodeList to an array and use .indexOf(event.target)

    // const correctIndex = questions[currentIndex].correct;
    // 3. Get the correct answer index from the current question in the data array

    // if(clickedIndex === correctIndex) {
    //    event.target.classList.add("correct");
    //    console.log('correct');
    //    score++;
    //    scoreDisplay.textContent = score;
   
    // } else {
    //  event.target.classList.add("wrong");
    //   btnsArray[correctIndex].classList.add("correct");
    // } 
    // 4. Compare: did the player pick the right one?
    //    - If correct: add the "correct" class to the clicked button, increment score,
    //      and update scoreDisplay.textContent
    //    - If wrong: add the "wrong" class to the clicked button,
    //      and add "correct" to the button at the correct index to reveal it
   
   // btnsArray.forEach((btn) => {
   //  btn.classList.add("disabled");
   // });
   // 5. Disable all four answer buttons so the player can't change their answer
   //    hint: convert to a real array and use forEach to add "disabled" to each
   
  // questionCard.classList.add("answered");
  //  nextBtn.classList.remove("hidden");
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

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if(currentIndex < questions.length){
    loadQuestion(currentIndex);
  }

  else{
    showEndScreen();
  }
  // 1. Increment currentIndex
  // 2. If there are more questions left (currentIndex < questions.length):
  //    - Call loadQuestion with the updated index
  // 3. Otherwise the game is over — call showEndScreen()
});

function showEndScreen() {
   questionCard.classList.add('hidden');
   endScreen.classList.remove('hidden');

   const h2 = document.createElement('h2');
   h2.textContent = `You scored ${score} out of  ${questions.length}`

   const p = document.createElement('p');
   if(score > 2){
    p.textContent = 'You Killed it!!!';
   }
   else{
    p.textContent = 'Try again!!!'
   }

   const button = document.createElement('button');
   button.id = 'restart-btn';
   button.textContent = 'play again';

   endScreen.append(h2, p, button);
}


    // 1. Hide the question card

  // 2. Show the end screen (it started with class="hidden" — remove that now)

  // 3. Create an <h2> and set its textContent to show the final score
  //    e.g. "You scored 3 out of 5"
  //    hint: use the score and questions.length variables

  // 4. Create a <p> for an encouragement message
  //    Write a conditional with at least two different messages
  //    (e.g. one for a perfect score, one for passing, one for failing)

  // 5. Create a <button>, set its id to "restart-btn" and its textContent to "Play Again"

  // 6. Append all three elements to endScreen
  //    note: createElement builds the node in memory — appendChild is what puts it on the page


endScreen.addEventListener("click", (event) => {
   if(event.target.id !== 'restart-btn') return;    
   // 1. Return early if the clicked element is not the restart button
   //    hint: check event.target.id
   //    think: why can't we just do document.getElementById("restart-btn") at the top of the file?

   currentIndex = 0;
   score = 0;
   scoreDisplay.textContent = score;
   // 2. Reset both state variables (score and currentIndex) to 0
   //    - Also update scoreDisplay.textContent so the header reflects the reset

   endScreen.innerHTML = "";
   // 3. Clear everything showEndScreen built
   //    hint: setting endScreen.innerHTML to "" removes all child elements at once
   

   questionCard.classList.remove('hidden');
   // 4. Bring the question card back

   loadQuestion(0);
   // 5. Load the first question

});

loadQuestion(0);

// Why does clicking a button inside #answer-list trigger this listener?
// Answer: Because of bubbling- When I click a button it bubbles up through the DOM tree.

// What is the difference between event.target and event.currentTarget here?
// event.target  → The actual button element that was pressed
// event.currentTarget → The answer-list element where the listener is attached




