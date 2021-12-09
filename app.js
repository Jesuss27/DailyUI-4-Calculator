var state = "hello";
const previousOperandTextElement = document.querySelector(`.previous-operand`)
const currentOperandTextElement = document.querySelector(`.current-operand`)
currentOperandTextElement.className = "current-operand"


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ``
        this.previousOperand = ``
        this.operation = undefined

    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)

    }
    appendNumber(number){
        if(number =="." && this.currentOperand.includes(".")){
            return
        }
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation){
        if(this.currentOperand === "")return
        if(this.previousOperand !== ""){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = " "


    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case "+" :
                computation = prev + current
                break
                
            case "-" :
                computation = prev - current
                break
            case "x" :
                computation = prev * current
                break
            case "÷" :
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ""

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        if(this.operation != undefined){
        this.previousOperandTextElement.innerText = this.previousOperand + " " +this.operation
        }else{
            this.previousOperandTextElement.innerText = this.previousOperand
        }
    

    }


}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
const operationButtons = document.querySelectorAll(`[data-operation]`)
const equalsButton = document.querySelector("[data-equals]")
const allClear = document.getElementById("all-clear")
const deleteButton = document.getElementById("delete")




operationButtons.forEach(button => {
    button.addEventListener("click", () =>{
        console.log(button.innerHTML)
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
        
    })
})

equalsButton.addEventListener("click", () => {
    calculator.compute()
    calculator.updateDisplay()
})

equalsButton.addEventListener("click", () => {
    calculator.compute()
    calculator.updateDisplay()
})

allClear.addEventListener("click", () => {
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener("click", () => {
    calculator.clear()
    calculator.updateDisplay()
})















function createRows(r,c, array){
    const rows = document.createElement("div")
    for(let i = 0; i < r; i++){
        let row = document.createElement("div")
        row.className = "boardRow";
        for(let j = 0; j < c; j++){
            var offset = i * c;
            if(array[j + offset] === "="){
                let rectangle = `<button class='rectangle' onClick='onClick(this)'>${array[j + offset]}</button>`
                row.insertAdjacentHTML("beforeend",rectangle);
            }else{
                let square = `<button class='square' onClick='onClick(this)'>${array[j + offset]}</button>`
                 row.insertAdjacentHTML("beforeend",square);
            }  
        }
    rows.insertAdjacentHTML("beforeend",row.outerHTML);
    }
    return rows
}

function createNumberPad(){
    const numberPad = document.getElementById("numbers-pad");
    var numberPadArray = ["7","8","9","4","5","6","1","2","3","%","0",".",]
    const rows = createRows(4,3, numberPadArray);
    var content = rows.outerHTML;
    numberPad.insertAdjacentHTML("afterbegin",content);
}

function onClick(e){
    calculator.appendNumber(e.textContent)
    calculator.updateDisplay()
    console.log(e.textContent)
}

// function  createTopRow(){
//     const keyPad = document.getElementById("key-pad");
//     const topRowArray =["C","÷","x","<"]
//     const rows = createRows(1,4,topRowArray)
//     rows.className= "top-row";
//     console.log(rows)
//     var content = rows.outerHTML;
//     keyPad.insertAdjacentHTML("afterbegin",content);
// }

// function createOuterColumn(){
//     const keyPad = document.getElementById("key-pad");
//     const outerColumnArray = ["-","+","="];
//     const column = createRows(3,1, outerColumnArray);
//     column.className = "outer-column";
//     var content = column.outerHTML ; 
//     keyPad.insertAdjacentHTML("afterbegin",content);

// }

// function displayState(){
//     const displayState = document.getElementById("display-state");
//     displayState.insertAdjacentHTML("beforeend",`<h1>${state}</h1>`)
//     console.log(state)

// }

// displayState()
// createTopRow()
createNumberPad()
// createOuterColumn()


// var keyPad = document.getElementById("key-pad");

// keyPad.insertAdjacentHTML("afterbegin","<div class='square'></div>");
