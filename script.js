let displayValue = 0;
let valuesStore = [];
const calcDisplay = document.getElementById("calc-display");
const equals = document.getElementById("equal-btn");
const key1 = document.getElementById("1");
const key2 = document.getElementById("2");
const key3 = document.getElementById("3");
const key4 = document.getElementById("4");
const key5 = document.getElementById("5");
const key6 = document.getElementById("6");
const key7 = document.getElementById("7");
const key8 = document.getElementById("8");
const key9 = document.getElementById("9");
const key0 = document.getElementById("0");

function populateDisplay(element) {
   if(element == 1) {
     displayValue = 1;
     valuesStore.push(displayValue);
     let number1 = document.createElement("p");
     number1.textContent = displayValue;
     calcDisplay.appendChild(number1);
     // displayValue = 1;
   }
   else if(element == 2) {
     displayValue = 2;
     valuesStore.push(displayValue);
     let number2 = document.createElement("p");
     number2.textContent = displayValue;
     calcDisplay.appendChild(number2);
   }
  else if(element == 3) {
     displayValue = 3;
     valuesStore.push(displayValue);
     let number3 = document.createElement("p");
     number3.textContent = displayValue;
     calcDisplay.appendChild(number3);
   }
  else if(element == 4){
     displayValue = 4;
     valuesStore.push(displayValue);
     let number4 = document.createElement("p");
     number4.textContent = displayValue;
     calcDisplay.appendChild(number4);
   }
  else if(element == 5){
     displayValue = 5;
     valuesStore.push(displayValue);
     let number5 = document.createElement("p");
     number5.textContent = displayValue;
     calcDisplay.appendChild(number5);
   }
  else if(element == 6) {
     displayValue = 6;
     valuesStore.push(displayValue);
     let number6 = document.createElement("p");
     number6.textContent = displayValue;
     calcDisplay.appendChild(number6);
   }
  else if(element == 7) {
     displayValue = 7;
     valuesStore.push(displayValue);
     let number7 = document.createElement("p");
     number7.textContent = displayValue;
     calcDisplay.appendChild(number7);
   }
  else if(element == 8) {
     displayValue = 8;
     valuesStore.push(displayValue);
     let number8 = document.createElement("p");
     number8.textContent = displayValue;
     calcDisplay.appendChild(number8);
   }
  else if(element == 9) {
     displayValue = 9;
     valuesStore.push(displayValue);
     let number9 = document.createElement("p");
     number9.textContent = displayValue;
     calcDisplay.appendChild(number9);
   }
  else if(element == 0) {
     displayValue = 0;
     valuesStore.push(displayValue);
     let number0 = document.createElement("p");
     number0.textContent = displayValue;
     calcDisplay.appendChild(number0);
   }
  console.log(valuesStore);
  const int = valuesStore.
  reduce((accumulator, value) => (accumulator * 10) + value, 0);
  console.log(int);
  return valuesStore;
}

const add = (a,b) =>
     a+b;

function subtract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    return a/b;
}

function operate(num1, num2, operator) {
    add(num1,num2);
    subtract(num1,num2);
    multiply(num1, num2);
    divide(num1,num2);
}