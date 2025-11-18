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
    if(number != ""){
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
    } else {
        if(otherNumber != ""){return otherNumber}
    }
}

function intOrFloat(number){
    const numberLength = (number+"").length
    if(numberLength < displayLength){
        return number
    } else {
        if((number - Math.trunc(number)) != 0){
            return number.toFixed(displayLength-1)
        } else {
            return "ERROR"
        }
    }
}

var isOperating = false;
const display = document.querySelector(".content");
const displayLength = Math.ceil(display.clientWidth / 44)

function addToDisplay(event){
    if(event.target.textContent == "."){
        event.target.removeEventListener("click", addToDisplay)
    }
    
    const amountOfNumbers = display.textContent.length
    if(amountOfNumbers < displayLength){
        if(isOperating){display.textContent = ""; isOperating = false;}
        display.textContent += event.target.textContent
    }
}

function updateDisplay(event){
    if(display.textContent == "ERROR"){return}
    isOperating = true
    operator = event.target.textContent
    numberDisplay = display.textContent
}

function displayResult(){
    otherNumberDisplay = display.textContent
    display.textContent = intOrFloat(operate(numberDisplay, operator, otherNumberDisplay))
    operator = ""
    otherNumberDisplay = ""
    isOperating = true
}

function clearDisplay(){
    display.textContent = "";
    numberDisplay = "";
    otherNumberDisplay = "";
    operator = "";
    isOperating = false;
}

function deleteCharacter(){
    const text = display.textContent
    display.textContent = text.slice(0, text.length-1)
}

const allNumbers = document.querySelectorAll(".number");

for(let i = 0; i < allNumbers.length; i++){
    allNumbers[i].addEventListener("click", addToDisplay)
}

const allOperators = document.querySelectorAll(".operator");

for(let i = 0; i < allOperators.length; i++){
    allOperators[i].addEventListener("click", displayResult)
    allOperators[i].addEventListener("click", updateDisplay)
}

const equalsTo = document.querySelector("#equals");
equalsTo.addEventListener("click", displayResult)

const clear = document.querySelector("#C");
clear.addEventListener("click", clearDisplay)

const backspace = document.querySelector("#delete");
backspace.addEventListener("click", deleteCharacter)
