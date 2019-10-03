document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const timer = new Stopwatch(0);
  timer.mount(body);
});
