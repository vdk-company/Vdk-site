// data/products.js — импортируем товары
import products from './data/products.js';

const productsContainer = document.getElementById('products-container');
const cartCountElem = document.getElementById('cart-count');

let cart = JSON.parse(localStorage.getItem('cart')) || {};

// Функция отображения всех товаров на главной
function displayProducts() {
  productsContainer.innerHTML = '';

  products.forEach(product => {
    // Создаем карточку товара
    const card = document.createElement('div');
    card.className = 'product-card';

    // Картинка товара (связь с именем файла картинки)
    const img = document.createElement('img');
    img.src = product.image || 'images/default.png';
    img.alt = product.name;
    card.appendChild(img);

    // Название товара
    const name = document.createElement('h3');
    name.textContent = product.name;
    card.appendChild(name);

    // Описание объёмов с ценами в селекте
    const volumeSelect = document.createElement('select');
    volumeSelect.className = 'volume-select';

    product.variants.forEach(variant => {
      const option = document.createElement('option');
      option.value = variant.volume;
      option.dataset.price = variant.price;
      option.textContent = `${variant.volume} - ${variant.price.toLocaleString()} тг.`;
      volumeSelect.appendChild(option);
    });

    card.appendChild(volumeSelect);

    // Количество
    const qtyInput = document.createElement('input');
    qtyInput.type = 'number';
    qtyInput.min = 1;
    qtyInput.value = 1;
    qtyInput.className = 'qty-input';
    card.appendChild(qtyInput);

    // Цена товара (считается исходя из выбранного объема и количества)
    const priceDisplay = document.createElement('div');
    priceDisplay.className = 'price-display';
    const initialPrice = product.variants[0].price;
    priceDisplay.textContent = `Цена: ${initialPrice.toLocaleString()} тг.`;
    card.appendChild(priceDisplay);

    // Обновляем цену при изменении объема или количества
    function updatePrice() {
      const selectedOption = volumeSelect.options[volumeSelect.selectedIndex];
      const pricePerUnit = Number(selectedOption.dataset.price);
      const qty = Number(qtyInput.value);
      const totalPrice = pricePerUnit * qty;
      priceDisplay.textContent = `Цена: ${totalPrice.toLocaleString()} тг.`;
    }

    volumeSelect.addEventListener('change', updatePrice);
    qtyInput.addEventListener('input', () => {
      if (qtyInput.value < 1) qtyInput.value = 1;
      updatePrice();
    });

    // Кнопка "Добавить в корзину"
    const addButton = document.createElement('button');
    addButton.textContent = 'Добавить в корзину';
    addButton.className = 'add-to-cart-btn';

    addButton.addEventListener('click', () => {
      const selectedOption = volumeSelect.options[volumeSelect.selectedIndex];
      const variantVolume = selectedOption.value;
      const pricePerUnit = Number(selectedOption.dataset.price);
      const qty = Number(qtyInput.value);

      const cartKey = `${product.id}-${variantVolume}`;

      if (cart[cartKey]) {
        cart[cartKey].quantity += qty;
      } else {
        cart[cartKey] = {
          productId: product.id,
          name: product.name,
          volume: variantVolume,
          price: pricePerUnit,
          quantity: qty,
          image: product.image || 'images/default.png'
        };
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert(`Добавлено ${qty} шт. ${product.name} (${variantVolume}) в корзину`);
    });

    card.appendChild(addButton);

    productsContainer.appendChild(card);
  });
}

// Обновление счётчика корзины
function updateCartCount() {
  let totalQty = 0;
  for (const key in cart) {
    totalQty += cart[key].quantity;
  }
  cartCountElem.textContent = totalQty;
}

// Инициализация
displayProducts();
updateCartCount();
