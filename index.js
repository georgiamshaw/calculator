const display = document.querySelector("#calculator-display");
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
      calculator.dataset.previousKeyType = 'number';
    }
    else if (action === "decimal") {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.';
      } else if (previousKeyType === "operator") {
        console.log("hello");
        return "0."
      }
      calculator.dataset.previousKeyType = "decimal";
    } else if (action === "plusMinus") {
      if (displayedNum > 0) {
        display.textContent = "-" + displayedNum;
      }  else if (displayedNum < 0) {
        display.textContent = displayedNum;
      }

    }
    else if (action === "clear") {
      display.textContent = "0";
      calculator.dataset.previousKeyType = 'clear';
    }
    else if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      display.textContent = calculate(firstValue, operator, secondValue);
      calculator.dataset.previousKeyType = 'calculate';
    }
    else if (action === "add" || "subtract" || "multiply" || "divide") {
      const firstValue = calculator.dataset.firstValue
  const operator = calculator.dataset.operator
  const secondValue = displayedNum
  key.classList.add("pressed");
  calculator.dataset.previousKeyType = "operator";
  calculator.dataset.firstValue = displayedNum;
  calculator.dataset.operator = action;

    }
  }
})

const calculate = (n1, operator, n2) => {
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
