document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector("body");
  const snailArr = [];
  
  fetch('http://bootcamp.podlomar.org/api/snails/5')
    .then(response => response.json())
    .then(snailList => {
      for(const snail of snailList) {
        const snailComp = new Snail(snail.name, snail.velocity, snail.color);
        snailComp.mount(body);
        snailArr.push(snailComp);
        // snailComp.move();
      }
    });

    console.log(snailArr);

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 32) {
      console.log("spacebar");
      for (let snail of snailArr) {
        snail.move();
      }
    }
  }); 
});
  