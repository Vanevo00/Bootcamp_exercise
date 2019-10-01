const shoppingList = [
  { name: 'apples', amount: '1kg' },
  { name: 'bacon', amount: '200g' },
  { name: 'cheddar', amount: '250g' },
  { name: 'beer', amount: '6' },
  { name: 'icecream', amount: '1kg' },
  { name: 'soda', amount: '2l' },
  { name: 'water', amount: '10l' },
  { name: 'swedish fish', amount: '1kg' },
];

document.addEventListener('DOMContentLoaded', () => {
  const listElm = document.querySelector('.shopping-list');

  for (const item of shoppingList) {
    const name = item.name;
    const amount = item.amount;

    const itemElement = document.createElement("div");
    itemElement.className = "shopping-list__item";
    itemElement.innerHTML = (
      `<span class="item-name">${name}</span>
      <span class="item-amount">${amount}</span>
      <i class="far fa-check-square"></i>`
    );

    const check = itemElement.querySelector(".fa-check-square");
    const itemName = itemElement.querySelector(".item-name");
    const itemAmount = itemElement.querySelector(".item-amount");
    check.addEventListener("click", () => {
      check.classList.toggle("green");
      itemName.classList.toggle("green");
      itemAmount.classList.toggle("green");
    });

    listElm.appendChild(itemElement);
  }
});
