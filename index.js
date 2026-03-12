const button = document.querySelectorAll('.button');
const operator = document.querySelectorAll('.operator');
const calScreen = document.querySelector('.cal-screen');
const calText = document.querySelector('.cal-text');
const input = [];

function updateCalText() {

};


operator.forEach((operator) => {
    operator.addEventListener('mousedown', () => {
        operator.style.backgroundColor = 'rgb(255, 206, 92)';
        const value = operator.textContent.trim();
        input.push(value);
    });
    operator.addEventListener('mouseup', () => {
        operator.style.backgroundColor = 'rgb(237, 154, 0)';
    });
});

button.forEach((button) => {
    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = 'rgb(147, 147, 147)';
        const value = button.textContent.trim();

        if (value === 'AC') {
            input.length = 0;
            return;
        }

        input.push(value);
    });
    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = 'black';
    });
});