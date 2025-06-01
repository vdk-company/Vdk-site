// main.js

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const productElem = button.closest('.product');
      const name = productElem.getAttribute('data-name');
      const volume = productElem.getAttribute('data-volume');
      const price = productElem.getAttribute('data-price');

      addToCart({ name, volume, price, quantity: 1 });
      alert(`Товар "${name}" добавлен в корзину!`);
    });
  });
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Проверяем, есть ли уже этот товар в корзине
  const existingIndex = cart.findIndex(item => item.name === product.name && item.volume === product.volume);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}
