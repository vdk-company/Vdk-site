import products from './data/products.js';

const cartKey = 'vdkgas_cart';

function getCart() {
  const cart = localStorage.getItem(cartKey);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
}

function renderCart() {
  const cart = getCart();
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElem = document.getElementById('total-price');
  cartContainer.innerHTML = '';

  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Ваша корзина пуста.</p>';
    totalPriceElem.textContent = '0 ₸';
    return;
  }

  cart.forEach((item, index) => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return;

    const variant = product.variants.find(v => v.volume === item.volume);
    if (!variant) return;

    const itemTotal = variant.price * item.quantity;
    total += itemTotal;

    const itemElem = document.createElement('div');
    itemElem.className = 'cart-item';

    itemElem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <h3>${product.name}</h3>
        <p>Объем: ${item.volume}</p>
        <p>Цена за шт: ${variant.price.toLocaleString()} ₸</p>
        <p>
          Количество: 
          <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="quantity-input" />
        </p>
        <p>Итого: ${itemTotal.toLocaleString()} ₸</p>
        <button class="remove-item" data-index="${index}">Удалить</button>
      </div>
    `;

    cartContainer.appendChild(itemElem);
  });

  totalPriceElem.textContent = `${total.toLocaleString()} ₸`;
}

function setupEventListeners() {
  const cartContainer = document.getElementById('cart-items');

  cartContainer.addEventListener('input', e => {
    if (e.target.classList.contains('quantity-input')) {
      const index = +e.target.dataset.index;
      let val = parseInt(e.target.value);
      if (isNaN(val) || val < 1) val = 1;

      const cart = getCart();
      cart[index].quantity = val;
      saveCart(cart);
      renderCart();
    }
  });

  cartContainer.addEventListener('click', e => {
    if (e.target.classList.contains('remove-item')) {
      const index = +e.target.dataset.index;
      const cart = getCart();
      cart.splice(index, 1);
      saveCart(cart);
      renderCart();
    }
  });

  const orderForm = document.getElementById('order-form');
  orderForm.addEventListener('submit', e => {
    e.preventDefault();
    const cart = getCart();
    if (cart.length === 0) {
      alert('Корзина пуста!');
      return;
    }
    const address = document.getElementById('delivery-address').value.trim();
    if (!address) {
      alert('Пожалуйста, укажите адрес доставки.');
      return;
    }
    // Здесь можно отправить заказ на сервер или показать подтверждение
    alert(`Спасибо за заказ! Адрес доставки: ${address}\nВсего товаров: ${cart.length}`);

    // Очистка корзины после заказа
    localStorage.removeItem(cartKey);
    renderCart();
    orderForm.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  setupEventListeners();
});
