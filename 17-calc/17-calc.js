"use strict";

function showResult(resultElement) {
  document.querySelector(".calculator-result").appendChild(resultElement);
}

const panel = document.createElement("p");
panel.style.color = "white";

function calculate(event) {
  const option = event.target.classList.value;
  console.log(event.target.dataset.action);
  const numberOne = document.querySelector(".input-number-1");
  const numberTwo = document.querySelector(".input-number-2");
  let res;

  switch (option) {
    case "button-add":
      res = Number(numberOne.value) + Number(numberTwo.value);
      break;
    case "button-sub":
      res = Number(numberOne.value) - Number(numberTwo.value);
      break;
    case "button-mult":
      res = Number(numberOne.value) * Number(numberTwo.value);
      break;
    case "button-div":
      res = Number(numberOne.value) / Number(numberTwo.value);
      break;
  }
  numberOne.value = "";
  numberTwo.value = "";

  panel.innerText = res;

  showResult(panel);
}
