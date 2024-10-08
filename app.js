const theme = document.getElementById("theme");
const result = document.getElementById("result");
const buttons = [...document.getElementsByClassName("press")];
const clear = document.getElementById("delete");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");

let converted = 0;

theme.addEventListener("click", (event) => {
  let themeValue = event.target.value;

  if (themeValue === 1) {
    console.log(123);
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (result.innerHTML === "0") {
      result.innerHTML = "";
    }

    let clicked = event.target.textContent;
    result.innerHTML += clicked;
  });
});

clear.addEventListener("click", (event) => {
  let popped = result.innerHTML.split("");
  popped.pop();
  result.innerHTML = popped.join("");
});

reset.addEventListener("click", (event) => {
  result.innerHTML = "";
});

equal.addEventListener("click", (event) => {
  converted = eval(result.innerHTML);
  result.innerHTML = converted;
});
