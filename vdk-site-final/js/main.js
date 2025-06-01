document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cart = [];
  const cartItems = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  const cartSection = document.getElementById("cart");
  const checkoutForm = document.getElementById("checkout-form");

  function renderProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
      const item = document.createElement("div");
      item.className = "product-card";
      item.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Объём: ${product.volume}</p>
        <p>Цена: ${product.price} тг</p>
        <input type="number" min="1" value="1" id="qty-${product.id}" />
        <button onclick="addToCart(${product.id})">Добавить</button>
      `;
      productList.appendChild(item);
    });
  }

  window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const qty = parseInt(document.getElementById(`qty-${productId}`).value);
    const existing = cart.find(p => p.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ ...product, qty });
    }
    updateCart();
  };

  function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      li.textContent = `${item.name} × ${item.qty} = ${itemTotal} тг`;
      cartItems.appendChild(li);
    });
    totalPriceEl.textContent = `Итого: ${total} тг`;
    cartSection.classList.remove("hidden");
  }

  window.checkout = function () {
    checkoutForm.classList.remove("hidden");
  };

  window.submitOrder = function (e) {
    e.preventDefault();
    alert("Заказ отправлен!");
  };

  renderProducts();
});