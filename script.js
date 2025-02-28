let cart = [];

const products = [
    { id: 1, name: "Laptop", price: 1000, image: "iphone-1852901_640.jpg" },
    { id: 2, name: "Phone", price: 500, image: "phone.webp" },
    { id: 3, name: "Headphones", price: 200, image: "headphone.avif" },
  

];

document.addEventListener("DOMContentLoaded", () => {
    let productsContainer = document.getElementById("products");

    products.forEach(product => {
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="btn" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
});


function updateCart() {
    let cartList = document.getElementById("cart");
    let totalPriceSpan = document.getElementById("totalPrice");
    let averagePriceSpan = document.getElementById("averagePrice");

    cartList.innerHTML = "";

    cart.forEach(product => {
        let li = document.createElement("li");
        li.innerHTML = `
            <img src="${product.image}" class="cart-image" alt="${product.name}">
            <span>${product.name} - $${product.price} (x${product.quantity})</span>
            <button class="btn primary" onclick="increaseQuantity(${product.id})">+</button>
            <button class="btn danger" onclick="decreaseQuantity(${product.id})">-</button>
            <button class="btn danger" onclick="removeFromCart(${product.id})">❌</button>
        `;
        cartList.appendChild(li);
    });

    totalPriceSpan.innerText = calculateTotalPrice();
    averagePriceSpan.innerText = calculateAveragePrice();
}

function addToCart(id, name, price, image) {
    let existingProduct = cart.find(p => p.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(p => p.id !== productId);
    updateCart();
}

function increaseQuantity(productId) {
    let product = cart.find(p => p.id === productId);
    if (product) product.quantity += 1;
    updateCart();
}

function decreaseQuantity(productId) {
    let product = cart.find(p => p.id === productId);
    if (product && product.quantity > 1) {
        product.quantity -= 1;
    } else {
        removeFromCart(productId);
    }
    updateCart();
}

function calculateTotalPrice() {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

function calculateAveragePrice() {
    if (cart.length === 0) return 0;
    let totalQuantity = cart.reduce((sum, product) => sum + product.quantity, 0);
    return (calculateTotalPrice() / totalQuantity).toFixed(2);
}

function sortCart(order) {
    cart.sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}
