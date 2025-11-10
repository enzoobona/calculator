let numberDisplay = "";
let otherNumberDisplay = "";
let operator = "";

function add(number, otherNumber){
    return parseFloat(number) + parseFloat(otherNumber);
}

function subtract(number, otherNumber){
    return parseFloat(number) - parseFloat(otherNumber);
}

function multiply(number, otherNumber){
    return parseFloat(number) * parseFloat(otherNumber);
}

function divide(number, otherNumber){
    return parseFloat(number) / parseFloat(otherNumber);
}

function operate(number, operator, otherNumber){
    switch(operator){
        case "+":
            return add(number, otherNumber);
        case "-":
            return subtract(number, otherNumber);
        case "*":
            return multiply(number, otherNumber);
        case "/":
            return divide(number, otherNumber);
    }
}

const display = document.querySelector(".content");

function addToDisplay(event){
    if(display.scrollWidth < display.clientWidth + 1){
        const number = event.currentTarget
        display.textContent += number.textContent
    }
}

function updateDisplay(event){
    operator = event.currentTarget.textContent;
    numberDisplay = display.textContent;
}

function displayResult(){
    otherNumberDisplay = display.textContent;
    const result = operate(numberDisplay, operator, otherNumberDisplay);
    display.textContent = result;
    operatorPressed = false;
}

const allNumbers = document.querySelectorAll(".number");

for(let i = 0; i < allNumbers.length; i++){
    allNumbers[i].addEventListener("click", addToDisplay)
}

const allOperators = document.querySelectorAll(".operator");

for(let i = 0; i < allOperators.length; i++){
    allOperators[i].addEventListener("click", updateDisplay)
}

const equalsTo = document.querySelector("#equals");
equalsTo.addEventListener("click", displayResult)