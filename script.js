let num1 = 10;
let num2 = 20;
const operator = ''; 

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