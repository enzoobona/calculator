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
    display.textContent += event.target.textContent
}

function updateDisplay(event){
    operator = event.target.textContent
    numberDisplay = display.textContent
}

function displayResult(){

}

function clearDisplay(){
    display.textContent = "";
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

const clear = document.querySelector("#C");
clear.addEventListener("click", clearDisplay)