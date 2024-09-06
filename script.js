let num1 = 10;
let num2 = 20;
const operator = ''; 
const calcDisplay = document.getElementById("calc-display");
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

function populateDisplay() {
   if(key1) {
     console.log(key1);
   }
   if(key2) {
     console.log(key2);
   }
  if(key3) {
     console.log(key3);
   }
  if(key4) {
     console.log(key4);
   }
  if(key5) {
     console.log(key5);
   }
  if(key6) {
     console.log(key6);
   }
  if(key7) {
     console.log(key7);
   }
  if(key8) {
     console.log(key8);
   }
  if(key9) {
     console.log(key9);
   }
  if(key0) {
     console.log(key0);
   }   
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