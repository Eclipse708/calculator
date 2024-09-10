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
let dispResult = "";
let dispResultRounded = "";


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
      if (firstNum == "" && secondNum == "") {
        console.log("pressed equal when num 1 and 2 are empty");
      } else {
      console.log(firstNum + " " + " " + secondNum + " " + " " + operator);
      dispResult = operate(parseInt(firstNum), parseInt(secondNum), operator);
       
      if (isFinite(dispResult)) { 
      dispResultRounded = Math.round((dispResult + Number.EPSILON) * 100) / 100;
      firstNum = dispResultRounded;
      secondNum = "";
      console.log("First num " + firstNum + " second num " + secondNum);
      console.log("result is: " + dispResultRounded);
      calcDisplay.innerHTML = dispResultRounded;
      } else {
        calcDisplay.innerHTML = "Lol";
      }
     }
    }
    
     else if (functn == ".") {
      if (firstNum !== "") {
        firstNum += ".";
        calcDisplay.innerHTML = firstNum;
      }
   
      else if (secondNum !== "") {
        secondNum += ".";
        calcDisplay.innerHTML = secondNum;
      } 
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