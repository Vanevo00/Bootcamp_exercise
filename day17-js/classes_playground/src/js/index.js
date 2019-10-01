class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  sell() {
    this.quantity -= 1;
  }

  store(count) {
    this.quantity += count;
  }
}

const productArray = [
  new Product('wheel', 8000, 24),
  new Product('exhaust', 5000, 11),
  new Product('window', 4000, 20),
  new Product('hood', 15000, 2),
  new Product('pedal', 2000, 8),
  new Product('engine', 120000, 1),
  new Product('door', 20000, 5),
  new Product('whatever', 1000, 12),
];

document.addEventListener('DOMContentLoaded', () => {
  const productList = document.querySelector('.product-list');

  // eslint-disable-next-line no-restricted-syntax
  for (const product of productArray) {
    const productElement = document.createElement('div');
    productElement.classList.add('container-product');
    productElement.innerHTML = (
      `
      <div class="product-name">Name: ${product.name}</div>
      <div class="product-price">Price: ${product.price}</div>
      <div class="product-quantity">In stock: ${product.quantity}</div>
      <button class="buy">Buy</button>
      `
    );

    const button = productElement.querySelector('.buy');
    const quantity = productElement.querySelector('.product-quantity');

    button.addEventListener('click', () => {
      product.sell();
      quantity.textContent = `In stock: ${product.quantity}`;
      console.log('sell');
    });


    productList.appendChild(productElement);
  }
});
