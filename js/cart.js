document.addEventListener('DOMContentLoaded', () => {
  const cartItemsList = document.getElementById('cart-items');
  const clearCartBtn = document.getElementById('clear-cart');

  function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
      cartItemsList.innerHTML = '<li>Корзина пуста</li>';
      return;
    }

    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} (${item.volume} л) — Кол-во: ${item.quantity}`;
      cartItemsList.appendChild(li);
    });
  }

  clearCartBtn.addEventListener('click', () => {
    localStorage.removeItem('cart');
    renderCart();
  });

  renderCart();
});
