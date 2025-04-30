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
    totalItemsEl.textContent = `Item - ${cartData.length}`;
    totalPriceEl.textContent = `₹${totalAmount}`;
  
    // Quantity Button Listeners
    cartSection.addEventListener("click", (e) => {
      if (e.target.classList.contains("increase") || e.target.classList.contains("decrease")) {
        const index = parseInt(e.target.dataset.index);
        if (e.target.classList.contains("increase")) {
          cartData[index].quantity++;
        } else if (cartData[index].quantity > 1) {
          cartData[index].quantity--;
        }
  
        // Save updated cart
        localStorage.setItem("cartItems", JSON.stringify(cartData));
        // Reload to reflect changes
        location.reload();
      }
    });
  });
  