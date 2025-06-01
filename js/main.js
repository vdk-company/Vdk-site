document.addEventListener('DOMContentLoaded', function () {
  const cartItems = document.getElementById('cart-items');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const clearCartButton = document.getElementById('clear-cart');

  // Добавление товара в корзину
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const product = this.closest('.product');
      const productName = product.querySelector('h2').textContent;
      const productVolume = product.querySelector('p').textContent;

      const listItem = document.createElement('li');
      listItem.textContent = `${productName} — ${productVolume}`;
      cartItems.appendChild(listItem);
    });
  });

  // Очистка корзины
  clearCartButton.addEventListener('click', function () {
    cartItems.innerHTML = '';
  });
});
