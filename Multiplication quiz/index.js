const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questElem = document.getElementById("question");

const inputElem = document.getElementById("input");

const formElem = document.getElementById("form");

const scoreElem = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreElem.innerText = `score: ${score}`;

questElem.innerText = `What is ${num1} multiplied by ${num2}?`;

const correctAns = num1 * num2;

formElem.addEventListener("submit", () => {
  const userAns = +inputElem.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
