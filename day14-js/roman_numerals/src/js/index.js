const covertToRoman = () => {
  const arabicInput = document.querySelector('#arabic_num');
  const arabicValue = arabicInput.value;

  const romanEquivalents = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',

  };
};


document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#convert');
  button.addEventListener('click', covertToRoman);
});
