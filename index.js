const display = document.querySelector("#calculator-display");
const calculator = document.querySelector("#calculator-key-container");

document.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const numberDisplayed = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (numberDisplayed === "0" || (previousKeyType === "operator" || "calculate")) {
        display.textContent = keyContent;
      } else {
        display.textContent = numberDisplayed + keyContent;
      }
      calculator.dataset.previousKeyType = "number";
    }

    else if (action === "decimal") {
      if (!numberDisplayed.includes(".")) {
        display.textContent = numberDisplayed + ".";
      }
      if (previousKeyType === "operator" || "calculate") {
        display.textContent = "0.";
      }
      calculator.dataset.previousKeyType = "decimal";
    }

    else if (action === "plusMinus") {
      if (numberDisplayed > 0) {
        display.textContent = "-" + numberDisplayed;
      } else if (numberDisplayed < 0) {
        display.textContent = numberDisplayed;
      }
    }

    else if (action === "clear") {
      if (key.textContent === "CE") {
        calculator.dataset.firstValue = "";
        calculator.dataset.modValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
        key.textContent = "AC";
      }
      display.textContent = "0";
      calculator.dataset.previousKeyType = 'clear';
    }

    else if (action === "calculate") {
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      let secondValue = numberDisplayed;
      if (firstValue) {
        if (previousKeyType === "calculate") {
          firstValue = numberDisplayed
          secondValue = calculator.dataset.modValue
        }
        display.textContent = calculateOperation(firstValue, operator, secondValue);
      }
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = "calculate";
    }

    else if (action === "add" || "subtract" || "multiply" || "divide") {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = numberDisplayed

      if (firstValue && operator && (previousKeyType !== "operator" && "calculate")) {
        const calcValue = calculateOperation(firstValue, operator, secondValue)
        display.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = numberDisplayed;
      }
      key.classList.add("pressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.operator = action;
    }

    if (action !== "clear") {
      const clearButton = calculator.querySelector("[data-action=clear]")
      clearButton.textContent = "CE";
    }

    // if (previousKeyType === "operator") {
    //   key.classList.add("pressed");
    //   console.log("hello")
    // }
  }
})

const calculateOperation = (n1, operator, n2) => {
let firstNumber = parseFloat(n1);
let secondNumber = parseFloat(n2);
  let result = "";

  if (operator === "add") {
    result = firstNumber + secondNumber;
  } else if (operator === "subtract") {
    result = firstNumber - secondNumber;
  } else if (operator === "multiply") {
    result = firstNumber * secondNumber;
  } else if (operator === "divide") {
    result = firstNumber / secondNumber;
  }
  return result;
}

// document.addEventListener("keydown", function(move) {
//   const key = move.target;
//   const action = key.dataset.action;
//   const keyContent = key.textContent;
//   const numberDisplayed = display.textContent;
//   const previousKeyType = calculator.dataset.previousKeyType;
//
//   if (move.keyCode == 48) {
//     display.textContent = "0";
//     console.log("number 0");
//   }
//   if (move.keyCode == 49) {
//     display.textContent = "1";
//     console.log("number 1");
//   }
//   if (move.keyCode == 50) {
//     display.textContent = "2";
//     console.log("number 2");
//   }
//   if (move.keyCode == 51) {
//     display.textContent = "3";
//     console.log("number 3");
//   }
//   if (move.keyCode == 52) {
//     display.textContent = "4";
//     console.log("number 4");
//   }
//   if (move.keyCode == 53) {
//     display.textContent = "5";
//     console.log("number 5");
//   }
//   if (move.keyCode == 54) {
//     display.textContent = "6";
//     console.log("number 6");
//   }
//   if (move.keyCode == 55) {
//     display.textContent = "7";
//     console.log("number 7");
//   }
//   if (move.keyCode == 56) {
//     display.textContent = "8";
//     console.log("number 8");
//   }
//   if (move.keyCode == 57) {
//     display.textContent = "9";
//     console.log("number 9");
//   }
// });
