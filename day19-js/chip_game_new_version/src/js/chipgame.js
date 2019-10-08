class ChipGame {
  constructor() {
    this.score = 0;
  }

  renderGame() {
    this.game = document.createElement('div');
    this.game.className = 'chip-game-container';
    this.game.innerHTML = (`
    <div class="menu">
      <button class="add-chip" id="add-chip">Add chip</button>
      <button class="add-multiple-chips" id="add-multiple-chips">Add multiple chips</button>
      <input type="number" id="no-chips" placeholder="0">
      <button class="reset" id="reset">Reset</button>
      <div class="score" id="score">Score: 10</div>
    </div>
      <div class="playing-field"></div>
    </div>
    `);

    // add one chip
    const addChipButton = this.game.querySelector('#add-chip');
    addChipButton.addEventListener('click', () => {
      this.mountChip();
    });

    // add multiple chips
    const addMultipleChipsButton = this.game.querySelector('#add-multiple-chips');
    addMultipleChipsButton.addEventListener('click', () => {
      console.log('add multiple chips');
    });

    // reset
    const resetButton = this.game.querySelector('#reset');
    resetButton.addEventListener('click', () => {
      console.log('reset');
    });
  }

  mountGame(parent) {
    this.renderGame();
    parent.appendChild(this.game);
  }

  updateGame() {
    const scoreBoard = this.game.querySelector('#score');
    scoreBoard.textContent = `Score: ${this.score}`;
  }

  renderChip() {
    this.chip = document.createElement('div');
    this.chip.className = 'chip';
    this.chip.innerHTML = (`
    <p>${Math.floor(Math.random() * 5) + 1}</p>
    `);
    this.chip.style.left = `${Math.floor(Math.random() * 670) + 185}px`;
    this.chip.style.top = `${Math.floor(Math.random() * 660)}px`;
  }

  mountChip() {
    this.renderChip();
    this.game.appendChild(this.chip);
  }
}
