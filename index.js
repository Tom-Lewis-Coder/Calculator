const numButton = document.querySelectorAll('.number')
const opButton = document.querySelectorAll('.operator')
const decButton = document.querySelector('.decimal-operator')
const display = document.querySelector('.calculator-display')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const back = document.querySelector('.backUp')

operators = ['+', '-', '*', '/']
displayData = ''
lastClickOperator = false
decimalUsed = false
lastClickEquals = false

numButton.forEach(button => {
    button.addEventListener('click', () => {
        buttonValue = button.getAttribute('value')
        displayData += buttonValue 
    display.innerHTML = displayData
    lastClickOperator = false
    lastClickEquals = false
    })
})

opButton.forEach(button => {
    button.addEventListener('click', () => {
        buttonValue = button.getAttribute('value')
        lastClickOperator === true ? buttonValue = '' : displayData += buttonValue 
    display.innerHTML = displayData
    lastClickOperator = true
    decimalUsed = false
    lastClickEquals = false
    })
})

decButton.addEventListener('click', () => {
    buttonValue = decButton.getAttribute('value')
    decimalUsed === true ? buttonValue = '' : displayData += buttonValue 
    display.innerHTML = displayData
    decimalUsed = true
    lastClickEquals = false
})

equals.addEventListener('click', () => {
    try{
        displayData = eval(displayData) 
        displayData === undefined ? displayData= '' : display.innerHTML = displayData
        lastClickEquals = true
    }
    catch{
        displayData = ''
        display.innerHTML = displayData
        decimalUsed = false
        lastClickEquals = false
        alert('Please input correct formula')
    }
})

clear.addEventListener('click', () => {
    displayData = ''
    display.innerHTML = displayData
    decimalUsed = false
    lastClickEquals = false
})

back.addEventListener('click', () => {
    lastClickVal = displayData.substr(displayData.length - 1, displayData.length) // this variable holds value of the last clicked button before it is removed
    
    lastClickEquals === true ? displayData = '' : 
    displayData = displayData.substr(0, displayData.length - 1) // removes last value in display string
    display.innerHTML = displayData 
    
    operators.includes(displayData.substr(displayData.length - 1, displayData.length)) ? 
    lastClickOperator = true : lastClickOperator = false // checks if the new last value is operator
    
    lastClickVal === '.' ? decimalUsed = false : true // checks if cleared value was a decimal 
})
