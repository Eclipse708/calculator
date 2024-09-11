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
let lastIndexDotted = "";


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
    // console.log(firstNum);
      
    } else if (operator !== ""){
      // calcDisplay.innerHTML += operator;
      secondNum += event.target.innerText;
      calcDisplay.innerHTML = secondNum;
      // console.log("secondnum " + secondNum);
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
      dispResult = operate(parseFloat(firstNum), parseFloat(secondNum), operator);
       
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
//        lastIndexDotted will initially be "" but if dot added to first num, it will be true 
       console.log("last index dotted is: " + lastIndexDotted);
      if (firstNum !== "" && lastIndexDotted == false) {
          lastIndexDotted = true; 
//         returns the index of the dot
        let lastIndexDot = firstNum.toString().lastIndexOf(".");
//         if only one dot is present then run this 
        if (lastIndexDot == -1) { 
        console.log("first num in dec " + firstNum);
        firstNum += ".";
        calcDisplay.innerHTML = firstNum;
          }
      }
   
      else if (secondNum !== "") {
        let lastIndexDot = secondNum.toString().lastIndexOf(".");
        if (lastIndexDot == -1) {
        console.log("second num in dec " + secondNum);
        secondNum += ".";
        calcDisplay.innerHTML = secondNum;
          }
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

// keyboard support
document.addEventListener("keyup", (event) => {
  console.log("key pressed");
  console.log(event.keyCode);
  const keyName = event.keyCode;
  switch (keyName) {
    case 8:
    firstNum = "";
    secondNum = "";
    operator = "";
    display.innerHTML = "";
      
    case 49:
    firstNum += 1;
    calcDisplay.innerHTML = firstNum;
    calcDisplay.innerHTML = firstNum;
    break;
      
    case 50:
    firstNum += 2;
    calcDisplay.innerHTML = firstNum;
    calcDisplay.innerHTML = firstNum;
    break;
      
    case 51:
    firstNum += 3;
    calcDisplay.innerHTML = firstNum;
    calcDisplay.innerHTML = firstNum;
    break;
   
    case 52:
    firstNum += 4;
    calcDisplay.innerHTML = firstNum;
    calcDisplay.innerHTML = firstNum;
    break;
    
    case 53:
    firstNum += 5;
    calcDisplay.innerHTML = firstNum;
    calcDisplay.innerHTML = firstNum;
    break;
    
    case 54:
    firstNum += 6;
    calcDisplay.innerHTML = firstNum;
    calcDisplay.innerHTML = firstNum;
    break;
    
    case 55:
    firstNum += 7;
    calcDisplay.innerHTML = firstNum;
    calcDisplay.innerHTML = firstNum;
    break;
   
    case 56:
    firstNum += 8;
    calcDisplay.innerHTML = firstNum;
    calcDisplay.innerHTML = firstNum;
    break;
      
    case 57:
    firstNum += 9;
    calcDisplay.innerHTML = firstNum;
    calcDisplay.innerHTML = firstNum;
    break;
    
    case 48:
    firstNum += 0;
    calcDisplay.innerHTML = firstNum;
    calcDisplay.innerHTML = firstNum;
    break;
  }
})

// let calculate = operate("2.2","3.1","+");
// console.log(calculate);