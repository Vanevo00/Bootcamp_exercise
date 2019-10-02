class Game {
  constructor() {
    this.score = 0;
  }

  render() {
    this.canvas = document.createElement('div');
    this.canvas.className = 'canvas';
    this.canvas.innerHTML = (`
    <h1 id="score">Score: ${this.score}</h1>
    <button id='new-chips'>New chips</button>
    `);

    const newChips = this.canvas.querySelector('#new-chips');
    newChips.addEventListener('click', () => {
      this.startGame();
    });
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.canvas);
  }

  startGame() {
    for (let i = 0; i < 20; i += 1) {
      new Chip('red', 'medium', 3).mount(this.canvas);
    }
  }
}
