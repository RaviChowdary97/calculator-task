let display = document.getElementById("display");

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert("Invalid expression");
    clearDisplay();
  }
}

// Listen for keyboard events
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (
    isNaN(key) &&
    key !== "." &&
    key !== "+" &&
    key !== "-" &&
    key !== "*" &&
    key !== "/" &&
    key !== "%" &&
    key !== "Enter" &&
    key !== "Backspace"
  ) {
    alert("Only numbers and operators are allowed");
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key !== "Enter") {
    addToDisplay(key);
  }
});
