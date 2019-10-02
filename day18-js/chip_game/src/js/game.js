class Game {
  constructor(maxChipValue) {
    this.score = 0;
    this.maxChipValue = maxChipValue;
    this.chipNo = 0;
  }

  render() {
    this.board = document.createElement('div');
    this.board.classList.add('board');
    this.board.innerHTML = (`
    <h1>Score: ${this.score}</h1>
    <button id="addChip">add chip</button>
    `);

    const chipButton = this.board.querySelector('#addChip');
    chipButton.addEventListener('click', () => {
      this.renderChip();
      this.chipNo += 1;
    });
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.board);
  }


  renderChip() {
    this.chip = document.createElement('div');
    this.chip.classList.add('chip');
    this.chip.id = `chip-no${this.chipNo}`;
    this.chip.style.left = `${Math.floor(Math.random() * 540) + 1}px`;
    this.chip.style.top = `${Math.floor(Math.random() * 540) + 1}px`;
    this.chip.style.backgroundColor = 'black';
    this.chip.innerHTML = (`
    <p>${Math.floor(Math.random() * this.maxChipValue) + 1}</p>
    `);
    this.board.appendChild(this.chip);

    this.chip.addEventListener('click', () => {
      console.log(this.chip);
      this.chip.style.display = 'none';
    });
    console.log(this.chip);
  }
}
