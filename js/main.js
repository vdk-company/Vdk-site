// Показывать/скрывать выпадающее меню при наведении
document.querySelectorAll(".nav-item").forEach(item => {
  const submenu = item.querySelector(".submenu");
  if (submenu) {
    item.addEventListener("mouseenter", () => {
      submenu.style.display = "block";
    });
    item.addEventListener("mouseleave", () => {
      submenu.style.display = "none";
    });
  }
});

// Переход на страницу корзины
const cartButton = document.querySelector("#go-to-cart");
if (cartButton) {
  cartButton.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
}

// Плавный скролл (если надо)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
