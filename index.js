const button = document.querySelectorAll('.button');
const operator = document.querySelectorAll('.operator');

operator.forEach((operator) => {
    operator.addEventListener('mousedown', () => {
        operator.style.backgroundColor = 'rgb(255, 206, 92)';
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