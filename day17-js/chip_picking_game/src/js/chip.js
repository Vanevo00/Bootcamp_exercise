class Chip {
  constructor(color, size, value) {
    this.color = color;
    this.size = size; // small medium large
    this.value = value;
    this.y = Math.floor(Math.random() * 620);
    this.x = Math.floor(Math.random() * 620);
  }

  render() {
    this.chip = document.createElement('div');
    this.chip.className = `chip ${this.size}`;
    this.chip.style.backgroundColor = `${this.color}`;
    this.chip.style.left = `${this.y}px`;
    this.chip.style.top = `${this.x}px`;
    this.chip.innerHTML = (`
      <p>${this.value}</p>
    `);
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.chip);

    this.chip.addEventListener('click', () => {
      this.chip.style.display = 'none';
      parent.score += 1;
    });
  }
}
