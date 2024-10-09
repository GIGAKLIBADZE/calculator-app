const body = document.body;
const theme = document.getElementById("theme");
const result = document.getElementById("result");
const buttons = [...document.getElementsByClassName("press")];
const clear = document.getElementById("delete");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");


let converted = 0;
let buttonValue = "";
let checker = false;


theme.addEventListener("change", (event) => {
  let switchNumber = parseInt(event.target.value);
  
  if (switchNumber === 2) {
    body.classList.remove("first-theme");
    body.classList.remove("third-theme");
    body.classList.add("second-theme");
  } else if (switchNumber === 3) {
    body.classList.remove("first-theme");
    body.classList.remove("second-theme");
    body.classList.add("third-theme");
  } else if (switchNumber === 1) {
    body.classList.remove("second-theme");
    body.classList.remove("third-theme");
    body.classList.add("first-theme");
  }
});

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
