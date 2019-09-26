let result = 0;

const clearEverything = () => {
  result = 0;
  const calcInput = document.querySelector('#calc_input');
  const resultWindow = document.querySelector('#calc_result');
  calcInput.value = '0';
  resultWindow.textContent = result;
};

const addUp = () => {
  const calcInput = document.querySelector('#calc_input');
  calcInput.value += ' + ';
};

const subtract = () => {
  const calcInput = document.querySelector('#calc_input');
  calcInput.value += ' - ';
};

const multiplication = () => {
  const calcInput = document.querySelector('#calc_input');
  calcInput.value += ' * ';
};

const division = () => {
  const calcInput = document.querySelector('#calc_input');
  calcInput.value += ' / ';
};

const showResult = () => {
  const resultWindow = document.querySelector('#calc_result');
  const calcInput = document.querySelector('#calc_input');
  const valArr = calcInput.value.split(' ');
  result = parseFloat(valArr[0], 10);

  for (let i = 1; i < valArr.length; i += 2) {
    if (valArr[i] === '+') {
      result += parseFloat(valArr[i + 1], 10);
    } else if (valArr[i] === '-') {
      result -= parseFloat(valArr[i + 1], 10);
    } else if (valArr[i] === '*') {
      result *= parseFloat(valArr[i + 1], 10);
    } else if (valArr[i] === '/') {
      result /= parseFloat(valArr[i + 1], 10);
    } else {
      console.log('error');
    }
  }

  resultWindow.textContent = result;
  calcInput.value = result;
};

const showOne = () => {
  const calcInput = document.querySelector('#calc_input');
  if (calcInput.value === '0') {
    calcInput.value = '1';
  } else {
    calcInput.value += '1';
  }
};

const showTwo = () => {
  const calcInput = document.querySelector('#calc_input');
  if (calcInput.value === '0') {
    calcInput.value = '2';
  } else {
    calcInput.value += '2';
  }
};

const showThree = () => {
  const calcInput = document.querySelector('#calc_input');
  if (calcInput.value === '0') {
    calcInput.value = '3';
  } else {
    calcInput.value += '3';
  }
};

const showFour = () => {
  const calcInput = document.querySelector('#calc_input');
  if (calcInput.value === '0') {
    calcInput.value = '4';
  } else {
    calcInput.value += '4';
  }
};

const showFive = () => {
  const calcInput = document.querySelector('#calc_input');
  if (calcInput.value === '0') {
    calcInput.value = '5';
  } else {
    calcInput.value += '5';
  }
};

const showSix = () => {
  const calcInput = document.querySelector('#calc_input');
  if (calcInput.value === '0') {
    calcInput.value = '6';
  } else {
    calcInput.value += '6';
  }
};

const showSeven = () => {
  const calcInput = document.querySelector('#calc_input');
  if (calcInput.value === '0') {
    calcInput.value = '7';
  } else {
    calcInput.value += '7';
  }
};

const showEight = () => {
  const calcInput = document.querySelector('#calc_input');
  if (calcInput.value === '0') {
    calcInput.value = '8';
  } else {
    calcInput.value += '8';
  }
};

const showNine = () => {
  const calcInput = document.querySelector('#calc_input');
  if (calcInput.value === '0') {
    calcInput.value = '9';
  } else {
    calcInput.value += '9';
  }
};

const showZero = () => {
  const calcInput = document.querySelector('#calc_input');
  if (calcInput.value === '0') {
    calcInput.value = '0';
  } else {
    calcInput.value += '0';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const clear = document.querySelector('#btn-clear');
  const plus = document.querySelector('#btn-plus');
  const minus = document.querySelector('#btn-minus');
  const multiply = document.querySelector('#btn-multiply');
  const divide = document.querySelector('#btn-divide');
  const equals = document.querySelector('#btn-equals');
  const one = document.querySelector('#btn-one');
  const two = document.querySelector('#btn-two');
  const three = document.querySelector('#btn-three');
  const four = document.querySelector('#btn-four');
  const five = document.querySelector('#btn-five');
  const six = document.querySelector('#btn-six');
  const seven = document.querySelector('#btn-seven');
  const eight = document.querySelector('#btn-eight');
  const nine = document.querySelector('#btn-nine');
  const zero = document.querySelector('#btn-zero');
  clear.addEventListener('click', clearEverything);
  plus.addEventListener('click', addUp);
  minus.addEventListener('click', subtract);
  multiply.addEventListener('click', multiplication);
  divide.addEventListener('click', division);
  equals.addEventListener('click', showResult);
  one.addEventListener('click', showOne);
  two.addEventListener('click', showTwo);
  three.addEventListener('click', showThree);
  four.addEventListener('click', showFour);
  five.addEventListener('click', showFive);
  six.addEventListener('click', showSix);
  seven.addEventListener('click', showSeven);
  eight.addEventListener('click', showEight);
  nine.addEventListener('click', showNine);
  zero.addEventListener('click', showZero);
});
