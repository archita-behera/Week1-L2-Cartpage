let cart = [];

// Update cart display
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

// Add to cart
function addToCart(id, name, price, image) {
    let existingProduct = cart.find(p => p.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    updateCart();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(p => p.id !== productId);
    updateCart();
}

// Increase quantity
function increaseQuantity(productId) {
    let product = cart.find(p => p.id === productId);
    if (product) product.quantity += 1;
    updateCart();
}

// Decrease quantity
function decreaseQuantity(productId) {
    let product = cart.find(p => p.id === productId);
    if (product && product.quantity > 1) {
        product.quantity -= 1;
    } else {
        removeFromCart(productId);
    }
    updateCart();
}

// Calculate total price
function calculateTotalPrice() {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

// Calculate average price
function calculateAveragePrice() {
    if (cart.length === 0) return 0;
    let totalQuantity = cart.reduce((sum, product) => sum + product.quantity, 0);
    return (calculateTotalPrice() / totalQuantity).toFixed(2);
}

// Sort cart
function sortCart(order) {
    cart.sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
    updateCart();
}

// Clear cart
function clearCart() {
    cart = [];
    updateCart();
}
