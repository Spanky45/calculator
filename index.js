const button = document.querySelectorAll('.button');
const operator = document.querySelectorAll('.operator');
const calScreen = document.querySelector('.cal-screen');
const calText = document.querySelector('.cal-text');
const inputs = [];

function updateCalText() {

};


operator.forEach((operator) => {
    operator.addEventListener('mousedown', () => {
        operator.style.backgroundColor = 'rgb(255, 206, 92)';
        const value = operator.textContent;
        console.log(value);
    });
    operator.addEventListener('mouseup', () => {
        operator.style.backgroundColor = 'rgb(237, 154, 0)';
    });
});

button.forEach((button) => {
    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = 'rgb(147, 147, 147)';
    });
    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = 'black';
    });
});