let displayValue = 0;
let convVal = 0;
const display = document.querySelector(".display");
const calcDisplay = document.getElementById("calc-display");
const equals = document.getElementById("equal-btn");
const keys = document.querySelectorAll(".numeric");
const operators = document.querySelectorAll(".operator");
const functions = document.querySelectorAll(".function");
let firstNum = "";
let secondNum = "";
let operator = "";
let functn = "";
let result = "";
let calcDispResult = "";


const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;
// console.log(divide(1,2));

function operate (num1, num2, operator) {
  switch (operator) {
    case "+":
      result = add(num1,num2);
      break;
    case "-":
      result = subtract(num1,num2);
      break;
    case "x":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
  }
  return result;
}

keys.forEach(key => {
  key.addEventListener("click", (event) => {
    // Stores num in a variable
    if(operator == "") {
    firstNum += event.target.innerText;
    calcDisplay.innerHTML = firstNum;
      
    console.log(firstNum);
    } else if (operator !== ""){
      // calcDisplay.innerHTML += operator;
      secondNum += event.target.innerText;
      calcDisplay.innerHTML = secondNum;
      console.log("secondnum " + secondNum);
    }
  })
})

operators.forEach(op => {
  op.addEventListener("click", (event) => {
    operator = event.target.innerText;
    console.log(operator);
  })
})

functions.forEach (func => {
  func.addEventListener("click", (event) => {
    functn = event.target.innerHTML;
    console.log(functn);
    
    if (functn == "=") {
      console.log(firstNum + " " + " " + secondNum + " " + " " + operator);
      calcDispResult = operate(parseInt(firstNum), parseInt(secondNum), operator);
      // firstNum = calcDispResult;
      console.log("result is: " + calcDispResult);
      calcDisplay.innerHTML = calcDispResult;
    }
    else if (functn == "clear") {
      firstNum = "";
      secondNum = "";
      operator = "";
      calcDisplay.innerHTML = "";
    }
  })
})

// let calculate = operate(2,3,"+");
// console.log(calculate);