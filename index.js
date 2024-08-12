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
 

let firstNumber="";
let operator;
let secondNumber="";
let decimalStatus=true;
function operate(operator,firstNumber,secondNumber){
    firstNumber=parseFloat(firstNumber)
    secondNumber=parseFloat(secondNumber)
    switch(operator){
        case '+':{
            return add(firstNumber,secondNumber).toFixed(2)
        } break;

        case '-':{
            return subtract(firstNumber,secondNumber).toFixed(2)
        } break;

        case 'x':{
            return multiply(firstNumber,secondNumber).toFixed(2)
        } break;

        case '/':{
            if(secondNumber==0)
                alert("where did you learn math from?! you cant divide a number by 0 !")
            else 
                return divide(firstNumber,secondNumber).toFixed(2)
        } 
    }
    secondNumberDone=false;
}

const decimalButton = document.querySelector('#point')

function hideDecimalButton(){
    decimalButton.style.visibility='hidden'
}

function showDecimalButton(){
    decimalButton.style.visibility='visible'
}

// hideDecimalButton()

const keypad = document.querySelector('#btn-container')
const display = document.querySelector('#display')


let operatorStatus = false
let tempResult="";
let resultClicked= false;
let secondNumberDone = false;

function handleBackspace(){
    if(operatorStatus&&secondNumber!==""){
        secondNumber=secondNumber.slice(0,-1)
        display.textContent=secondNumber
    }
    else if(!operatorStatus&&firstNumber!==""){
        firstNumber=firstNumber.slice(0,-1)
        display.textContent=firstNumber
    }
    else if(operatorStatus&&operator !==""){
        operator=""
        display.textContent=firstNumber
        operatorStatus=false
    }
}

const undoButton = document.querySelector('#undo')

undoButton.addEventListener('click',handleBackspace)

keypad.addEventListener('click',(item)=>{
    let target= item.target;
    if(target.id=='point'){
        hideDecimalButton()
    }
    if(target.tagName==='BUTTON'){
        if(!target.classList.contains('function')){
            if(target.classList.contains('operator')){
                showDecimalButton()
                if(secondNumberDone){
                    tempResult=operate(operator,firstNumber,secondNumber)
                    firstNumber=tempResult.toString()
                    secondNumber=""
                }
                operator=target.textContent
                display.textContent=target.textContent
                operatorStatus=true
            }
            else if(target.classList.contains('value')){
                if(operatorStatus!=true){
                    firstNumber+=target.textContent
                    display.textContent=firstNumber
                }
                else if(operatorStatus==true){
                    secondNumber+=target.textContent
                    display.textContent=secondNumber
                    secondNumberDone=true;
                }
            }
        }
        
    }
})

const clearButton = document.querySelector('#clear')

clearButton.addEventListener('click',()=>{
    clearDisplay()
})

function clearDisplay(){
    display.textContent=""
    firstNumber=""
    secondNumber=""
    operator=""
    operatorStatus=false
    resultClicked=false
    secondNumberDone=false
    console.log("Display Cleared!")
}

const resultKey = document.querySelector('#equal')
resultKey.addEventListener('click',()=>{
    showDecimalButton()
    if(firstNumber!=""&&secondNumber!=""&&operator!=""){
    tempResult=operate(operator,firstNumber,secondNumber)
    display.textContent=tempResult
    firstNumber=""
    secondNumber=""
    operator=""
    operatorStatus=false
    resultClicked=true   
    secondNumberDone=false
   } 
   else alert("Invalid Operation :C")
})