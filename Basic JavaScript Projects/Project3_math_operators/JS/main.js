function addNumbers() {
document.getElementById("Math").innerHTML = 7 + 3;
}

function subtractNumbers() {
document.getElementById("Math").innerHTML = 10 - 3;
}

function multiplyNumbers() {
document.getElementById("Math").innerHTML = 6 * 9;
}

function divideNumbers() {
document.getElementById("Math").innerHTML = 42 / 6;
}

function more_Math() { 
var simple_Math = (1 + 3) * 10 / 2 -4;
document.getElementById("Math").innerHTML = (1 + 3) * 10 / 2 -4;
}

function Modulus_Operator() {
var modulus = 25 % 4;
document.getElementById("Math").innerHTML = (25 % 4);
}

function negation_Operator() {
var x = 10;
document.getElementById("Math").innerHTML = -x;
}

function Increment_Operator() {
var X = 5;
X++;
document.getElementById("Math").innerHTML = X;
}

function Decrement_Operator() {
var X = 7.25;
X--;
document.getElementById("Math").innerHTML = X;
}

function Math_Random() {
var x = Math.random();
x*100;
document.getElementById("Math").innerHTML = x;
}

function Math_Object() {
var X = Math.round(6.2);
x = 6.2
document.getElementById("Math").innerHTML = X;
}
