const operator = prompt('Enter the preferred operator (either +, -, /, or *): ');

const number1 =  parseFloat(prompt('Enter the First number:'));
const number2 = parseFloat(prompt('Enter the Second number:'));

let result;

if (operator == '+') {
result = number1 + number2;
}
else if (operator == '-'){
result = number1 - number2;
}
else if (operator == '/'){
    result = number1 / number2;
}
else {
    result = number1 * number2;
}

window.alert("Result is" + '' + result)
