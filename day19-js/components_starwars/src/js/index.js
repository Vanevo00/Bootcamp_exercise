document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  fetch('https://swapi.co/api/people/?format=json')
    .then((response) => response.json())
    .then((characterList) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const character of characterList.results) {
        const characterComp = new List(character.name, character.height, character.gender, character.eye_color);
        characterComp.mount(container);
      }
    });
});
