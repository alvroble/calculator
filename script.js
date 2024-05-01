let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let state = 0;

const clearButton = document.querySelector("#clear");
const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const display = document.querySelector("#display-txt");

let displayContent = ""

const add = function(a,b) {
    return a+b;
}
  
const subtract = function(a,b) {
    return a-b;
}

const multiply = function(a,b) {
    return a*b;
}

const divide = function(a,b) {
    return a/b;
}

const operation = function(operator, a, b) {
    if (operator == "add") {
        return add(a,b);
    } else if (operator == "subtract") {
        return subtract(a,b);
    } else if (operator == "multiply") {
        return multiply(a,b);
    } else if (operator == "divide") {
        return divide(a,b);
    }
}

clearButton.addEventListener("click", () => {
    displayContent = "0";
    display.textContent = displayContent;
})


Array.from(numberButtons).forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === '.' && displayContent.indexOf('.') !== -1) {
            return;
        }
        if (displayContent.charAt(0) === '0' && (displayContent.indexOf('.') === -1 || button.textContent !== '.')) {
            displayContent = displayContent.slice(1);
        }
        if (state === 0) {
            displayContent = displayContent.concat(button.textContent);
            firstNumber = Number(displayContent);
            secondNumber = 0;
        } else if (state === 1) {
            displayContent = displayContent.concat(button.textContent);
            secondNumber = Number(displayContent);
        } else if (state === 2) {
            displayContent = button.textContent;
            firstNumber = Number(displayContent);
            secondNumber = 0;
            state = 0;
        }
        display.textContent = displayContent;
    })
})


Array.from(operatorButtons).forEach(button => {
    button.addEventListener("click", () => {
        if (button.id !== "equal") {
            operator = button.id;
            displayContent = "0";
            display.textContent = displayContent;
            state = 1;
        } else {
            if (operator !== "") {
                firstNumber = operation(operator, firstNumber, secondNumber);
                state = 2;
                displayContent = firstNumber.toString();
                display.textContent = displayContent;
            }
        }
        
    })
})

