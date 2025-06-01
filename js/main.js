// main.js — обновлённый и финальный JavaScript для сайта ВДК

// Открытие/закрытие выпадающего меню
const dropdownToggle = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener("mouseover", () => {
    dropdownMenu.style.display = "block";
  });

  dropdownToggle.addEventListener("mouseleave", () => {
    dropdownMenu.style.display = "none";
  });
}

// Добавление товара в корзину
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".product-card");
    const name = productCard.querySelector(".product-title").innerText;
    const price = productCard.querySelector(".product-price").innerText;
    const volume = productCard.querySelector("select")?.value || "";

    const product = { name, price, volume };
    addToCart(product);
  });
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Товар добавлен в корзину!");
}

// Отображение товаров в корзине (на cart.html)
if (window.location.pathname.includes("cart.html")) {
  const cartContainer = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Корзина пуста</p>";
  } else {
    cart.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.innerHTML = `
        <div>
          <strong>${item.name}</strong> <br/>
          Объём: ${item.volume || "не выбран"} <br/>
          Цена: ${item.price}
        </div>
        <button onclick="removeFromCart(${index})">Удалить</button>
      `;
      cartContainer.appendChild(itemElement);
    });
  }
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
