// ...твой существующий код в main.js

document.addEventListener('DOMContentLoaded', () => {
  const cartItemsUl = document.getElementById('cart-items');
  const clearBtn = document.getElementById('clear-cart');
  const addButtons = document.querySelectorAll('.add-to-cart');

  function addItemToCart(name) {
    const li = document.createElement('li');
    li.textContent = name;
    cartItemsUl.appendChild(li);
  }

  addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.parentElement.querySelector('h2').textContent;
      addItemToCart(productName);
    });
  });

  clearBtn.addEventListener('click', () => {
    cartItemsUl.innerHTML = '';
  });
});
