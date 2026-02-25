
function calculate(){
const num1 = document.getElementById("FirstNum");
const num2 = document.getElementById("SecondNum");
const operator = document.getElementById("operator");
const result = document.getElementById("result");

if(NaN(num1) || NaN(num2)){
    result.textContent = "Must be a Number!"
    return;
}

let answer; 

switch(operator){
    case "add":
        answer = num1 + num2;
    result.textContent = answer;
    break;

    case "minus":
        answer = num1 - num2; 
    result.textContent = answer; 
    break;

    case "multiply":
        answer = num1 * num2; 
    result.textContent = answer;
    break;

    case "divide": 
    answer = num1 / num2; 
    result.textContent = answer;
    break;
}
}
