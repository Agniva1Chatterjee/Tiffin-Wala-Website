// cart.js
document.addEventListener("DOMContentLoaded", () => {
    const cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    const cartSection = document.getElementById("cartSection");
    const itemCountEl = document.getElementById("itemCount");
    const mepEl = document.getElementById("mep");
    const totalItemsEl = document.getElementById("totalItems");
    const totalPriceEl = document.getElementById("totalPrice");
  
    let totalAmount = 0;
  
    // Clear previous cart items
    cartSection.innerHTML = "";
  
    cartData.forEach((item, index) => {
      totalAmount += item.price * item.quantity;
  
      const cartItem = document.createElement("div");
      cartItem.classList.add("card");
      cartItem.innerHTML = `
        <div class="card-info">
          <img src="${item.image}" alt="${item.title}" class="food-img"/>
          <div>
            <h1 class="food-title">${item.title}</h1>
            <p class="food-desc">${item.description}</p>
            <span class="tag">${item.tag || "veg"}</span>
          </div>
        </div>
      <div class="card-price">
      <p class="price">₹${item.price}</p>
      <div class="qty-controls">
      <button class="delete-item" data-index="${index}">🗑️</button>
    <button class="decrease" data-index="${index}">-</button>
    <p>${item.quantity}</p>
    <button class="increase" data-index="${index}">+</button>
    </div>
</div>

      `;
      cartSection.appendChild(cartItem);
    });
  
    // Update summary section
    itemCountEl.textContent = `${cartData.length} item(s) you have selected`;
    mepEl.textContent = `₹${totalAmount}`;
    const totalQuantity = cartData.reduce((sum, item) => sum + item.quantity, 0);
    itemCountEl.textContent = `${totalQuantity} item(s) you have selected`;
    totalItemsEl.textContent = `Item - ${totalQuantity}`;
    
    totalPriceEl.textContent = `₹${totalAmount}`;
  
    // Quantity Button Listeners
    
    

  // Quantity & Delete Button Listeners
cartSection.addEventListener("click", (e) => {
  const index = parseInt(e.target.dataset.index);

  if (e.target.classList.contains("increase")) {
    cartData[index].quantity++;
  } else if (e.target.classList.contains("decrease")) {
    if (cartData[index].quantity > 1) {
      cartData[index].quantity--;
    }
  } else if (e.target.classList.contains("delete-item")) {
    cartData.splice(index, 1); // Remove item
  } else {
    return; // Exit if unrelated click
  }

  // Save updated cart and reload
  localStorage.setItem("cartItems", JSON.stringify(cartData));
  location.reload();
});
});