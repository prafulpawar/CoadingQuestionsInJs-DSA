
let num1 = parseFloat(prompt("Enter first number:"));


let num2 = parseFloat(prompt("Enter second number:"));


let operation = prompt("Enter an operation (+, -, *, /):");

let result;


if (operation === '+') {
    result = num1 + num2;
} else if (operation === '-') {
    result = num1 - num2;
} else if (operation === '*') {
    result = num1 * num2;
} else if (operation === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Cannot divide by zero!";
    }
} else {
    result = "Invalid operation!";
}

// Output the result
alert(`The result of ${num1} ${operation} ${num2} is: ${result}`);
