document.addEventListener('DOMContentLoaded', () => {
  const game = document.querySelector('#game');
  const board1 = new Game(3);
  board1.mount(game);
});
