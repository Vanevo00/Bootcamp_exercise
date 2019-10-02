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
    <div class="main-menu">
      <h1 id="score">Score: ${this.score}</h1>
      <div class="button-container">
        <button id="addChip">Add chip</button>
        <button id="resetBoard">Reset</button>
        <div class="btn-with-input">
          <input type="number" id="no-chips" placeholder="number of chips">
          <button id="multiple-Chips">Add multiple chips</button>
        </div>
      </div>
    </div>
    `);

    // add one chip
    const addChipButton = this.board.querySelector('#addChip');
    addChipButton.addEventListener('click', () => {
      this.renderChip();
      this.chipNo += 1;
    });

    // reset board
    const resetBoardButton = this.board.querySelector('#resetBoard');
    resetBoardButton.addEventListener('click', () => {
      this.resetBoard();
    });

    // add multiple chips
    const multipleChipsButton = this.board.querySelector('#multiple-Chips');
    multipleChipsButton.addEventListener('click', () => {
      const noOfChips = this.board.querySelector('#no-chips').value;
      for (let i = 0; i < noOfChips; i += 1) {
        this.renderChip();
      }
    });
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.board);
  }


  renderChip() {
    const randomChipValue = Math.floor(Math.random() * this.maxChipValue) + 1;

    this.chip = document.createElement('div');
    this.chip.classList.add('chip');
    // this.chip.id = `chip-no${this.chipNo}`;
    this.chip.style.left = `${Math.floor(Math.random() * 540)}px`;
    this.chip.style.top = `${Math.floor(Math.random() * 370) + 175}px`;
    this.chip.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
    this.chip.innerHTML = (`
    <p>${randomChipValue}</p>
    `);
    setInterval(() => {
      this.chip.style.left = `${Math.floor(Math.random() * 540)}px`;
      this.chip.style.top = `${Math.floor(Math.random() * 370) + 175}px`;
    }, 1000);

    this.board.appendChild(this.chip);

    this.chip.addEventListener('click', (e) => {
      console.log(e);
      const scoreBoard = this.board.querySelector('#score');
      if (e.path.length === 8) {
        e.path[1].style.display = 'none';
      } else {
        e.path[0].style.display = 'none';
      }
      this.score += randomChipValue;
      scoreBoard.innerText = `Score: ${this.score}`;
    });
  }

  resetBoard() {
    const scoreBoard = this.board.querySelector('#score');
    this.score = 0;
    scoreBoard.innerText = `Score: ${this.score}`;
    const allChips = this.board.querySelectorAll('.chip');

    for (let i = 0; i < allChips.length; i += 1) {
      allChips[i].style.display = 'none';
    }
  }
}
