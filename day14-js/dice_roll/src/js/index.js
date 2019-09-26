const generateNum = () => (Math.floor(Math.random() * 6) + 1);

const roll = () => {
  const diceArr = ['#dice1', '#dice2', '#dice3', '#dice4', '#dice5', '#dice6'];

  for (let i = 0; i < diceArr.length; i += 1) {
    const randomNum = generateNum();
    const dice = document.querySelector(diceArr[i]);

    switch (randomNum) {
      case 1:
        dice.src = '/img/side1.png';
        break;
      case 2:
        dice.src = '/img/side2.png';
        break;
      case 3:
        dice.src = '/img/side3.png';
        break;
      case 4:
        dice.src = '/img/side4.png';
        break;
      case 5:
        dice.src = '/img/side5.png';
        break;
      case 6:
        dice.src = '/img/side6.png';
        break;
      default: console.log('error');
    }
  }
};


document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#roll-btn');
  button.addEventListener('click', roll);
});
