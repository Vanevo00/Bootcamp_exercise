document.addEventListener('DOMContentLoaded', () => {
  const minus = document.querySelector("#minus");
  const plus = document.querySelector("#plus");
  const counter = document.querySelector("#counter");
  const knob = document.querySelector("#knob");

  
  
  minus.addEventListener("click", () => {
    let currNum = parseInt(counter.textContent, 10);
    const currWidth = knob.style.width;
    
    if (currNum > 0) {
      currNum--;
      counter.textContent = currNum;
      knob.style.width = currNum * 10 + "%";
    }
    
  });

  plus.addEventListener("click", () => {
    let currNum = parseInt(counter.textContent, 10);
    
    if (currNum < 10) {
      currNum++;
      counter.textContent = currNum;
      knob.style.width = currNum * 10 + "%";
    }
  });
});