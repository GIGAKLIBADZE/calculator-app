const theme = document.getElementById("theme");
const result = document.getElementById("result");
const buttons = [...document.getElementsByClassName("press")];
const clear = document.getElementById("delete");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");

let converted = 0;
let buttonValue = "";
let checker = false;


buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    buttonValue = button.textContent;

    if (checker === true) {
      result.innerHTML = "0";
    }

    checker = false
    
    if (result.innerHTML.length > 10) {
      return;
    }


    if (result.innerHTML === "0" && (buttonValue !== "/" && buttonValue !== "+" && buttonValue !== "-"  && buttonValue !== "x" && buttonValue !== ".")) {
      result.innerHTML = "";
    }

    let clicked = event.target.textContent;
    result.innerHTML += clicked;
    buttonValue = "";
  });
});

clear.addEventListener("click", (event) => {
  let popped = result.innerHTML.split("");
  popped.pop();
  result.innerHTML = popped.join("");
});

reset.addEventListener("click", (event) => {
  result.innerHTML = "0";
});

equal.addEventListener("click", (event) => {
  let expression = result.innerHTML.replaceAll("x", "*");
  converted = eval(expression);

  if (result.innerHTML % 1 !==0 ) {
    result.innerHTML = converted.toFixed(2);
  } else {
    result.innerHTML = converted;
  }

  checker = true;
});
