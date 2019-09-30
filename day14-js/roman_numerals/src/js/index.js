const covertToRoman = () => {
  const arabicInput = document.querySelector('#arabic_num');
  const result = document.querySelector('#result');
  let arabicValue = parseInt(arabicInput.value, 10);
  let romanStr = '';

  const romanEquivalents = [
    [1, 'I'],
    [4, 'IV'],
    [5, 'V'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M'],
  ].reverse();

  console.log(isNaN(arabicValue));
  if (isNaN(arabicValue)) {
    result.innerHTML = 'Enter a number!';
  } else if (arabicValue > 3999) {
    result.innerHTML = 'Number too large!';
  } else {
    while (arabicValue > 0) {
      for (let i = 0; i < romanEquivalents.length; i += 1) {
        while (arabicValue >= romanEquivalents[i][0]) {
          romanStr += romanEquivalents[i][1];
          arabicValue -= romanEquivalents[i][0];
        }
      }
    }
    result.innerHTML = romanStr;
  }


  console.log(arabicValue);
};


document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#convert');
  button.addEventListener('click', covertToRoman);
});
