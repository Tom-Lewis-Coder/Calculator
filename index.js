const buttons = document.querySelectorAll('.number, .operator, .decimal-operator')
const display = document.querySelector('.calculator-display')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')

displayData = ''

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttonValue = button.getAttribute('value')
        buttonValue == '.' && 
            displayData.includes('.') && 
                !displayData.includes('+') && 
                    !displayData.includes('-') && 
                        !displayData.includes('*') && 
                            !displayData.includes('/') ? 
                                buttonValue = '' : displayData += buttonValue
        display.innerHTML = displayData
    })
})

equals.addEventListener('click', () => {
    displayData = eval(displayData) 
    display.innerHTML = displayData
})

clear.addEventListener('click', () => {
    displayData = ''
    display.innerHTML = displayData
})
