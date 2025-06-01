document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("products");
  productData.forEach(product => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${product.name}</h3><p>${product.volume}</p><p>${product.price} тг</p>`;
    productContainer.appendChild(div);
  });
});