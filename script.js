// let button = document.getElementById("btn");
const randomNum = Math.floor(Math.random() * 100) + 1;

document.getElementById("result").innerText =
  "Please start the game by entering a number!";
console.log(randomNum);

function checkWinner(event) {
  event.preventDefault();
  const number1 = parseInt(document.getElementById("num").value);
  console.log(number1);
  let counter;

  if (number1 === randomNum) {
    document.getElementById(
      "result"
    ).innerHTML = `Congratulations! You Won in ${counter} chances`;
  } else if (number1 > randomNum) {
    document.getElementById(
      "result"
    ).innerHTML = `guess number is greater than system number!`;
    document.getElementById("num").value = "";
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `guess number is less than system number!`;
    document.getElementById("num").value = "";
  }
  counter++;
}
