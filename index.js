function add(a,b){
    return a+b;
}


function subtract(a,b){
    return a-b;
}


function multiply(a,b){
    return a*b;
}


function divide(a,b){
    return a/b;
}
 

let firstNumber;
let operator;
let secondNumber;

function operate(operator,firstNumber,secondNumber){
    switch(operator){
        case '+':{
            return add(firstNumber,secondNumber)
        } break;

        case '-':{
            return subtract(firstNumber,secondNumber)
        } break;

        case '*':{
            return multiply(firstNumber,secondNumber)
        } break;

        case '/':{
            return divide(firstNumber,secondNumber)
        } 
    }
}

console.log(operate('/',10,20))