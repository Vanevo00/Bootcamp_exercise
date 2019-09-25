const userInput1 = parseInt(prompt('Enter first number:'), 10);
const userInput2 = parseInt(prompt('Enter second number:'), 10);

const square = (num1, num2) => Math.sqrt((num1 * num1) + (num2 * num2));

alert(square(userInput1, userInput2));
