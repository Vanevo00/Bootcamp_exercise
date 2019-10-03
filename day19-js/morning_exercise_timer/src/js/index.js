let currentTime = 0;

document.addEventListener('DOMContentLoaded', () => {
  const time = document.querySelector('#time');
  const upArrow = document.querySelector('#arrow-up');
  const downArrow = document.querySelector('#arrow-down');
  const reset = document.querySelector('#reset');
  const start = document.querySelector('#start');
  const stop = document.querySelector('#stop');


  time.textContent = currentTime;

  upArrow.addEventListener('click', () => {
    currentTime += 1;
    time.textContent = currentTime;
  });

  downArrow.addEventListener('click', () => {
    currentTime -= 1;
    time.textContent = currentTime;
  });

  start.addEventListener('click', () => {
    const timerInterval = setInterval(() => {
      if (currentTime < 60) {
        currentTime += 1;
        time.textContent = currentTime;
      }
    }, 10);

    start.style.display = 'none';
    stop.style.display = 'block';

    stop.addEventListener('click', () => {
      clearInterval(timerInterval);
      start.style.display = 'block';
      stop.style.display = 'none';
    });
  });

  reset.addEventListener('click', () => {
    currentTime = 0;
    time.textContent = currentTime;
  });
});
