document.addEventListener('DOMContentLoaded', () => {
  const game = document.querySelector('#game');
  const board1 = new Game(8);
  board1.mount(game);
});
