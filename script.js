let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstNumber = '';

function appendNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        updateDisplay();
    }
}

function appendOperator(op) {
    if (currentInput !== '') {
        if (operator !== '') {
            calculate();
        }
        firstNumber = currentInput;
        operator = op;
        currentInput = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstNumber = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    if (firstNumber !== '' && currentInput !== '' && operator !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(firstNumber) / parseFloat(currentInput);
                break;
            default:
                return;
        }
        currentInput = result.toString();
        operator = '';
        firstNumber = '';
        updateDisplay();
    }
}

function updateDisplay() {
    display.innerText = currentInput === '' ? '0' : currentInput;
}
