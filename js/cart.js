// Получаем список товаров из localStorage или пустой массив
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItemsList = document.getElementById('cart-items');
const clearCartBtn = document.getElementById('clear-cart');

// Функция отображения товаров в корзине
function renderCart() {
  cartItemsList.innerHTML = '';
  if (cart.length === 0) {
    cartItemsList.innerHTML = '<li>Корзина пуста.</li>';
    clearCartBtn.style.display = 'none';
    return;
  }
  clearCartBtn.style.display = 'inline-block';

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} — ${item.volume} л — Кол-во: ${item.quantity}`;
    cartItemsList.appendChild(li);
  });
}

// Очистка корзины
clearCartBtn.addEventListener('click', () => {
  cart = [];
  localStorage.removeItem('cart');
  renderCart();
});

// Запуск отображения при загрузке страницы
renderCart();
