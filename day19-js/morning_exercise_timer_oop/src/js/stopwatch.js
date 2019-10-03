class Stopwatch {
  constructor(currTime) {
    this.currTime = currTime;
  }

  render() {
    this.stopwatch = document.createElement('div');
    this.stopwatch.classList.add('stopwatch-container');
    this.stopwatch.innerHTML = (`
      <button id="start" class="start">Start</button>
      <button id="stop" class="stop">Stop</button>
      <div class="time-container">
        <div class="arrow-up" id="arrow-up"></div>
        <div class="time" id="time"></div>
        <div class="arrow-down" id="arrow-down"></div>
      </div>
      <button id="reset" class="reset">Reset</button>
    `);

    const upArrow = this.stopwatch.querySelector('#arrow-up');
    const downArrow = this.stopwatch.querySelector('#arrow-down');
    const reset = this.stopwatch.querySelector('#reset');
    const start = this.stopwatch.querySelector('#start');
    // const stop = this.stopwatch.querySelector('#stop');
    this.update();

    upArrow.addEventListener('click', () => {
      this.incrementTime();
    });

    downArrow.addEventListener('click', () => {
      this.decrementTime();
    });

    start.addEventListener('click', () => {
      this.startWatch();
    });

    reset.addEventListener('click', () => {
      this.resetTime();
    });
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.stopwatch);
  }

  incrementTime() {
    this.currTime += 1;
    this.update();
  }

  decrementTime() {
    this.currTime -= 1;
    this.update();
  }

  startWatch() {
    const start = this.stopwatch.querySelector('#start');
    const stop = this.stopwatch.querySelector('#stop');
    const timerInterval = setInterval(() => {
      this.currTime += 1;
      this.update();
    }, 100);

    start.style.display = 'none';
    stop.style.display = 'block';

    stop.addEventListener('click', () => {
      clearInterval(timerInterval);
      start.style.display = 'block';
      stop.style.display = 'none';
    });
  }

  resetTime() {
    this.currTime = 0;
    this.update();
  }

  update() {
    const time = this.stopwatch.querySelector('#time');
    time.textContent = this.currTime;
  }
}
