const button = document.querySelectorAll('.button');
const operator = document.querySelectorAll('.operator');
const calText = document.querySelector('.cal-text');

let firstNumber = '';
let secondNumber = '';
let operatorValue = null;
let shouldResetScreen = false;

function updateCalText(value) {
    calText.textContent = value;
}

function setOperator(op) {
    if (operatorValue !== null) evaluate();

    firstNumber = calText.textContent;
    operatorValue = op;
    shouldResetScreen = true;
}

function operate(a, operator, b) {
    a = Number(a);
    b = Number(b);

    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === 'x') return a * b;   
    if (operator === '÷') return a / b;
}

function evaluate() {
    if (operatorValue === null) return;

    secondNumber = calText.textContent;

    const result = operate(firstNumber, operatorValue, secondNumber);

    updateCalText(result);

    operatorValue = null;
    firstNumber = result;
}

function appendNumber(number) {

    if (shouldResetScreen) {
        calText.textContent = '';
        shouldResetScreen = false;
    }

    if (calText.textContent === '0') {
        calText.textContent = '';
    }

    calText.textContent += number;
}


operator.forEach((op) => {
    op.addEventListener('mousedown', () => {
        op.style.backgroundColor = 'rgb(255, 206, 92)';

        const value = op.textContent.trim();

        if (value === '=') {
            evaluate();
            return;
        }

        setOperator(value);
    });

    op.addEventListener('mouseup', () => {
        op.style.backgroundColor = 'rgb(237, 154, 0)';
    });
});


button.forEach((btn) => {
    btn.addEventListener('mousedown', () => {
        btn.style.backgroundColor = 'rgb(147,147,147)';

        const value = btn.textContent.trim();

        if (value === 'AC') {
            firstNumber = '';
            secondNumber = '';
            operatorValue = null;
            shouldResetScreen = false;
            updateCalText('0');
            return;
        }

        if (value === 'Del') {
            calText.textContent = calText.textContent.slice(0,-1);
            if (calText.textContent === '') updateCalText('0');
            return;
        }

        if (!isNaN(value)) {
            appendNumber(value);
        }
    });

    btn.addEventListener('mouseup', () => {
        btn.style.backgroundColor = 'black';
    });
});