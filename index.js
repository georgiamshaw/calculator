const display = document.querySelector("#display");
const calculator = document.querySelector("#calculator-key-container");


document.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    else if (action === "decimal") {
      display.textContent = displayedNum + '.';
    } else if (action === "clear") {
      console.log("clear key!")
    } else if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      display.textContent = calculateOperations(firstValue, operator, secondValue);
    } else if (action === "add" || "subtract" || "multiply" || "divide") {
      // key.classList.add("pressed");
      // Array.from(key.parentNode.children).forEach(key => key.classList.remove("pressed"));
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
  }
})

const calculateOperations = (n1, operator, n2) => {
  let result = "";

  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }
  return result;
}
