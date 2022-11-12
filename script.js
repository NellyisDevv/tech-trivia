// Find out if you can make a sound if the user gets the question correct and also check to see if you can animate the cards in and out instead of having a regular load in and out transition
// Microsoft Google and Tesla Trivia will be released alongside half life 3

let card = document.getElementById("card");
let imgEl = document.getElementById("img-el");
let xEl = document.getElementById("x-el");
let heartEl = document.getElementById("heart-el");
let questionNum = document.getElementById("question-num");
let questionEl = document.getElementById("question-el");
let answerOne = document.getElementById("answer-one");
let answerTwo = document.getElementById("answer-two");
let answerThree = document.getElementById("answer-three");
let questionAnswers = document.getElementById("question-answers");

// Make the game not allow the user to choose the wrong answer more than one time

// GAME RULES

let hearts = 3;

function lostGame() {
  if (hearts === 2) {
    alert("OH NO");
  } else if (hearts === 1) {
    alert("DONT GET ANOTHER WRONG!");
  } else if (hearts === 0) {
    card.style.display = "none";
  }
}

function wonGame() {
  var audio = new Audio("./sounds/winGame.wav");
  audio.play();
}

function wrongAnswer() {
  hearts--;
  heartEl.innerHTML = hearts;
  var audio = new Audio("./sounds/wrongAnswer.wav");
  audio.play();
}

function correctAnswer() {
  answerOne.disabled = true;
  answerTwo.disabled = true;
  answerThree.disabled = true;
  hearts++;
  heartEl.innerHTML = hearts;
  var audio = new Audio("./sounds/correct.wav");
  audio.play();
}

// QUESTION ONE OF APPLE TRIVIA

function questionOneChoiceOne() {
  document.querySelectorAll("button")[0].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionOneChoiceTwo() {
  document.querySelectorAll("button")[1].style.backgroundColor = "LightGreen";
  correctAnswer();
  setTimeout(function () {
    questionTwo();
  }, 1000);
}

function questionOneChoiceThree() {
  document.querySelectorAll("button")[2].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

// QUESTION TWO OF APPLE TRIVIA

function questionTwoChoiceOne() {
  document.querySelectorAll("button")[0].style.backgroundColor = "LightGreen";
  correctAnswer();
  setTimeout(function () {
    questionThree();
  }, 1000);
}

function questionTwoChoiceTwo() {
  document.querySelectorAll("button")[1].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionTwoChoiceThree() {
  document.querySelectorAll("button")[2].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionTwo() {
  questionNum.innerText = `question 2 of 10`;
  questionEl.innerText = `Which Country is Apple Worth More Than?`;
  imgEl.innerHTML = `
  <img style="height: 100%" src="./images/cash.png" alt="" />
`;
  questionAnswers.innerHTML = `
<button
  onclick="questionTwoChoiceOne()"
  class="question-items"
  id="answer-one"
>
  Italy
</button>
<button
onclick="questionTwoChoiceTwo()"
class="question-items"
id="answer-two"
>
United Kingdom
</button>
<button
onclick="questionTwoChoiceThree()"
class="question-items"
id="answer-three"
>
India
</button>
`;
}

// QUESTION THREE OF APPLE TRIVIA

function questionThreeChoiceOne() {
  document.querySelectorAll("button")[0].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionThreeChoiceTwo() {
  document.querySelectorAll("button")[1].style.backgroundColor = "LightGreen";
  correctAnswer();
  setTimeout(function () {
    questionFour();
  }, 1000);
}

function questionThreeChoiceThree() {
  document.querySelectorAll("button")[2].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionThree() {
  questionNum.innerText = `question 3 of 10`;
  questionEl.innerText = `Who was The Co-founder of Apple?`;
  imgEl.innerHTML = `
  <img style="height: 100%" src="./images/ceo.png" alt="" />
`;
  questionAnswers.innerHTML = `
<button
  onclick="questionThreeChoiceOne()"
  class="question-items"
  id="answer-one"
>
  Steve Jobs
</button>
<button
onclick="questionThreeChoiceTwo()"
class="question-items"
id="answer-two"
>
Steve Wozniak
</button>
<button
onclick="questionThreeChoiceThree()"
class="question-items"
id="answer-three"
>
Tim Cook
</button>
`;
}

// QUESTION FOUR OF APPLE TRIVIA

function questionFourChoiceOne() {
  document.querySelectorAll("button")[0].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionFourChoiceTwo() {
  document.querySelectorAll("button")[1].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionFourChoiceThree() {
  document.querySelectorAll("button")[2].style.backgroundColor = "LightGreen";
  correctAnswer();
  setTimeout(function () {
    questionFive();
  }, 1000);
}

function questionFour() {
  questionNum.innerText = `question 4 of 10`;
  questionEl.innerText = `Who Apple product can stop a Bullet?`;
  imgEl.innerHTML = `
  <img style="height: 100%" src="./images/bullet.png" alt="" />
`;
  questionAnswers.innerHTML = `
<button
  onclick="questionFourChoiceOne()"
  class="question-items"
  id="answer-one"
>
Macbook Air
</button>
<button
onclick="questionFourChoiceTwo()"
class="question-items"
id="answer-two"
>
Iphone 14 Pro Max
</button>
<button
onclick="questionFourChoiceThree()"
class="question-items"
id="answer-three"
>
Macbook Pro
</button>
`;
}

// QUESTION FIVE APPLE TRIVIA

function questionFiveChoiceOne() {
  document.querySelectorAll("button")[0].style.backgroundColor = "LightGreen";
  correctAnswer();
  setTimeout(function () {
    questionSix();
  }, 1000);
}

function questionFiveChoiceTwo() {
  document.querySelectorAll("button")[1].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionFiveChoiceThree() {
  document.querySelectorAll("button")[2].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionFive() {
  questionNum.innerText = `question 5 of 10`;
  questionEl.innerText = `Which Company Makes Retina Displays?`;
  imgEl.innerHTML = `
  <img style="height: 100%" src="./images/phone.png" alt="" />
`;
  questionAnswers.innerHTML = `
<button
  onclick="questionFiveChoiceOne()"
  class="question-items"
  id="answer-one"
>
Samsung
</button>
<button
onclick="questionFiveChoiceTwo()"
class="question-items"
id="answer-two"
>
Sony
</button>
<button
onclick="questionFiveChoiceThree()"
class="question-items"
id="answer-three"
>
TCL
</button>
`;
}

// QUESTION SIX OF APPLE TRIVIA

function questionSixChoiceOne() {
  document.querySelectorAll("button")[0].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionSixChoiceTwo() {
  document.querySelectorAll("button")[1].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionSixChoiceThree() {
  document.querySelectorAll("button")[2].style.backgroundColor = "LightGreen";
  correctAnswer();
  setTimeout(function () {
    questionSeven();
  }, 1000);
}

function questionSix() {
  questionNum.innerText = `question 6 of 10`;
  questionEl.innerText = `Which Gaming System Did Apple Make?`;
  imgEl.innerHTML = `
  <img style="height: 100%" src="./images/game.png" alt="" />
`;
  questionAnswers.innerHTML = `
<button
  onclick="questionSixChoiceOne()"
  class="question-items"
  id="answer-one"
>
Neo Geo Mini
</button>
<button
onclick="questionSixChoiceTwo()"
class="question-items"
id="answer-two"
>
Sega Genesis Mini
</button>
<button
onclick="questionSixChoiceThree()"
class="question-items"
id="answer-three"
>
Apple Pippin
</button>
`;
}

// QUESTION SEVEN OF APPLE TRIVIA

function questionSevenChoiceOne() {
  document.querySelectorAll("button")[0].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionSevenChoiceTwo() {
  document.querySelectorAll("button")[1].style.backgroundColor = "LightGreen";
  correctAnswer();
  setTimeout(function () {
    questionEight();
  }, 1000);
}

function questionSevenChoiceThree() {
  document.querySelectorAll("button")[2].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionSeven() {
  questionNum.innerText = `question 7 of 10`;
  questionEl.innerText = `Who Invested $150 Million In Apple?`;
  imgEl.innerHTML = `
  <img style="height: 100%" src="./images/invest.png" alt="" />
`;
  questionAnswers.innerHTML = `
<button
  onclick="questionSevenChoiceOne()"
  class="question-items"
  id="answer-one"
>
Mark Zuckerberg
</button>
<button
onclick="questionSevenChoiceTwo()"
class="question-items"
id="answer-two"
>
Bill Gates
</button>
<button
onclick="questionSevenChoiceThree()"
class="question-items"
id="answer-three"
>
Jeff Bezos
</button>
`;
}

// QUESTION EIGHT OF APPLE TRIVIA

function questionEightChoiceOne() {
  document.querySelectorAll("button")[0].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionEightChoiceTwo() {
  document.querySelectorAll("button")[1].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionEightChoiceThree() {
  document.querySelectorAll("button")[2].style.backgroundColor = "LightGreen";
  correctAnswer();
  setTimeout(function () {
    questionNine();
  }, 1000);
}

function questionEight() {
  questionNum.innerText = `8 of 10`;
  questionEl.innerText = `Which CEO Banned Pets on Campus?`;
  imgEl.innerHTML = `
  <img style="height: 100%" src="./images/dog.png" alt="" />
`;
  questionAnswers.innerHTML = `
<button
  onclick="questionEightChoiceOne()"
  class="question-items"
  id="answer-one"
>
Tim Cook
</button>
<button
onclick="questionEightChoiceTwo()"
class="question-items"
id="answer-two"
>
John Sculley
</button>
<button
onclick="questionEightChoiceThree()"
class="question-items"
id="answer-three"
>
Steve Jobs
</button>
`;
}

// QUESTION NINE OF APPLE TRIVIA

function questionNineChoiceOne() {
  document.querySelectorAll("button")[0].style.backgroundColor = "LightGreen";
  correctAnswer();
  setTimeout(function () {
    questionTen();
  }, 1000);
}

function questionNineChoiceTwo() {
  document.querySelectorAll("button")[1].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionNineChoiceThree() {
  document.querySelectorAll("button")[2].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionNine() {
  questionNum.innerText = `9 of 10`;
  questionEl.innerText = `What Time does Apple Products Display on Ads?`;
  imgEl.innerHTML = `
  <img style="height: 100%" src="./images/time.png" alt="" />
`;
  questionAnswers.innerHTML = `
<button
  onclick="questionNineChoiceOne()"
  class="question-items"
  id="answer-one"
>
9:41 AM
</button>
<button
onclick="questionNineChoiceTwo()"
class="question-items"
id="answer-two"
>
11:11 PM
</button>
<button
onclick="questionNineChoiceThree()"
class="question-items"
id="answer-three"
>
12:36 AM
</button>
`;
}

// QUESTION TEN OF APPLE TRIVIA

function questionTenChoiceOne() {
  document.querySelectorAll("button")[0].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionTenChoiceTwo() {
  document.querySelectorAll("button")[1].style.backgroundColor = "LightGreen";
  correctAnswer();
  setTimeout(function () {
    wonGame();
  }, 1000);
}

function questionTenChoiceThree() {
  document.querySelectorAll("button")[2].style.backgroundColor =
    "PaleVioletRed";
  wrongAnswer();
  lostGame();
}

function questionTen() {
  questionNum.innerText = `10 of 10`;
  questionEl.innerText = `Who was in Apples Original Logo?`;
  imgEl.innerHTML = `
  <img style="height: 100%" src="./images/magnet.png" alt="" />
`;
  questionAnswers.innerHTML = `
<button
  onclick="questionTenChoiceOne()"
  class="question-items"
  id="answer-one"
>
Albert Einstein
</button>
<button
onclick="questionTenChoiceTwo()"
class="question-items"
id="answer-two"
>
Isaac Newton
</button>
<button
onclick="questionTenChoiceThree()"
class="question-items"
id="answer-three"
>
Snoop Dogg
</button>
`;
}
