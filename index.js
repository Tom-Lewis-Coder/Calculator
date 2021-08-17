const numButton = document.querySelectorAll('.number')
const opButton = document.querySelectorAll('.operator')
const decButton = document.querySelector('.decimal-operator')
const display = document.querySelector('.calculator-display')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')

displayData = ''
lastKeyPressOperator = true
decimalUsed = false

numButton.forEach(button => {
    button.addEventListener('click', () => {
        buttonValue = button.getAttribute('value')
        displayData += buttonValue 
    display.innerHTML = displayData
    lastKeyPressOperator = false
    })
})

opButton.forEach(button => {
    button.addEventListener('click', () => {
        buttonValue = button.getAttribute('value')
        lastKeyPressOperator === true ? buttonValue = '' : displayData += buttonValue 
    display.innerHTML = displayData
    lastKeyPressOperator = true
    decimalUsed = false
    })
})

decButton.addEventListener('click', () => {
    buttonValue = decButton.getAttribute('value')
    decimalUsed === true ? buttonValue = '' : displayData += buttonValue 
    display.innerHTML = displayData
    decimalUsed = true
})

equals.addEventListener('click', () => {
    displayData = eval(displayData) 
    display.innerHTML = displayData
})

clear.addEventListener('click', () => {
    displayData = ''
    display.innerHTML = displayData
    decimalUsed = false
})
