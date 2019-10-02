document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#start');
  const body = document.querySelector('#body');

  button.addEventListener('click', () => {
    const game1 = new Game();
    game1.mount(body);
    button.style.display = 'none';
  });
});
