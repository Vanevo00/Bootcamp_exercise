class List {
  constructor(name, height, gender, eyeColor) {
    this.name = name;
    this.height = height;
    this.gender = gender;
    this.eyeColor = eyeColor;
  }

  render() {
    this.listItem = document.createElement('div');
    this.listItem.classList.add('list-item-container');
    this.listItem.innerHTML = (`
      <div class="character-name text-field"></div>
      <div class="character-height text-field"></div>
      <div class="character-gender text-field"></div>
      <div class="character-eye-color text-field"></div>
    `);
    this.update();
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.listItem);
  }

  update() {
    const nameEl = this.listItem.querySelector('.character-name');
    const heightEl = this.listItem.querySelector('.character-height');
    const genderEl = this.listItem.querySelector('.character-gender');
    const eyeColorEl = this.listItem.querySelector('.character-eye-color');
    nameEl.textContent = `Name: ${this.name}`;
    heightEl.textContent = `Height: ${this.height}`;
    genderEl.textContent = `Gender: ${this.gender}`;
    eyeColorEl.textContent = `Eye color: ${this.eyeColor}`;
  }
}
