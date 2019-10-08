document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  const game1 = new ChipGame();
  game1.mountGame(container);
});
