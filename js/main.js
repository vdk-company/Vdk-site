document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productDiv = button.closest('.product');
      const name = productDiv.querySelector('h2').innerText;
      // Для упрощения берем объём 10 литров, можно потом добавить выбор
      const volume = 10;

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      const existingItemIndex = cart.findIndex(item => item.name === name && item.volume === volume);
      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart.push({ name, volume, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`${name} (${volume} л) добавлен в корзину!`);
    });
  });
});
