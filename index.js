const numButton = document.querySelectorAll('.number')
const opButton = document.querySelectorAll('.operator')
const decButton = document.querySelector('.decimal-operator')
const display = document.querySelector('.calculator-display')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const back = document.querySelector('.backUp')

displayData = ''
lastKeyPressOperator = false
decimalUsed = false
lastKeyPressEquals = false

numButton.forEach(button => {
    button.addEventListener('click', () => {
        buttonValue = button.getAttribute('value')
        displayData += buttonValue 
    display.innerHTML = displayData
    lastKeyPressOperator = false
    lastKeyPressEquals = false
    })
})

opButton.forEach(button => {
    button.addEventListener('click', () => {
        buttonValue = button.getAttribute('value')
        lastKeyPressOperator === true ? buttonValue = '' : displayData += buttonValue 
    display.innerHTML = displayData
    lastKeyPressOperator = true
    decimalUsed = false
    lastKeyPressEquals = false
    })
})

decButton.addEventListener('click', () => {
    buttonValue = decButton.getAttribute('value')
    decimalUsed === true ? buttonValue = '' : displayData += buttonValue 
    display.innerHTML = displayData
    decimalUsed = true
    lastKeyPressEquals = false
})

equals.addEventListener('click', () => {
    try{
        displayData = eval(displayData) 
        displayData === undefined ? displayData= '' : display.innerHTML = displayData
        lastKeyPressEquals = true
    }
    catch{
        displayData = ''
        display.innerHTML = displayData
        decimalUsed = false
        lastKeyPressEquals = false
        alert('Please input correct formula')
    }
})

clear.addEventListener('click', () => {
    displayData = ''
    display.innerHTML = displayData
    decimalUsed = false
    lastKeyPressEquals = false
})

back.addEventListener('click', () => {
    lastKeyPressEquals === true ? displayData = '' :
    displayData = displayData.substr(0, displayData.length - 1)
    display.innerHTML = displayData
    lastKeyPressOperator = false
    decimalUsed = false
})
