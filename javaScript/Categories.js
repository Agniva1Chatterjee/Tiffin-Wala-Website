// Categories.js
import { food, manu } from '../data/fooditem.js';

const menuContainer = document.getElementById("menuContainer");
const cardContainer = document.getElementById("cardContainer");

// Render menu scroll
manu.forEach(item => {
  const div = document.createElement("div");
  div.className = "menu-card";
  div.innerHTML = `<img src="${item.img}" alt="food"/><p>${item.name}</p>`;
  menuContainer.appendChild(div);
});

// Render cards
function renderCards(data) {
  cardContainer.innerHTML = ""; // Clear old cards

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <div class="card-content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <div class="delites">
        <p> ⭐${item.rating} | ${item.time} min | ${item.type}</p>
      </div>
      <div class="bottom-row">
        <strong>₹${item.pices}</strong>
        <button class="add-to-cart">Add to cart</button>
      </div>
    `;

    card.querySelector('.add-to-cart').addEventListener('click', () => {
      const newItem = {
        title: item.name,
        description: item.description,
        image: item.img,
        price: parseInt(item.pices),
        quantity: 1,
        tag: item.type
      };

      const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

      const existing = cart.find(product => product.title === newItem.title);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push(newItem);
      }

      localStorage.setItem("cartItems", JSON.stringify(cart));
      alert(`${item.name} added to cart!`);
    });

    cardContainer.appendChild(card);
  });
}

// Initial load
renderCards(food);

const filterTitle = document.getElementById("filter-title");

document.getElementById("filter-veg").addEventListener("click", () => {
  const vegItems = food.filter(item => item.type.toLowerCase() === "veg");
  renderCards(vegItems);
  filterTitle.textContent = "Showing: Veg Items";
});

document.getElementById("filter-nonveg").addEventListener("click", () => {
  const nonVegItems = food.filter(item => item.type.toLowerCase() === "non-veg");
  renderCards(nonVegItems);
  filterTitle.textContent = "Showing: Non-Veg Items";
}); 

document.getElementById("filter-sweet").addEventListener("click", () => {
  const nonVegItems = food.filter(item => item.type.toLowerCase() === "sweet");
  renderCards(nonVegItems);
  filterTitle.textContent = "Showing: sweet Items";
});

document.getElementById("filter-low-high").addEventListener("click", () => {
  const sorted = [...food].sort((a, b) => a.pices - b.pices);
  renderCards(sorted);
  filterTitle.textContent = "Showing: Cost Low to High";
});

document.getElementById("filter-high-low").addEventListener("click", () => {
  const sorted = [...food].sort((a, b) => b.pices - a.pices);
  renderCards(sorted);
  filterTitle.textContent = "Showing: Cost High to Low";
});

document.getElementById("filter-clear").addEventListener("click", () => {
  renderCards(food);
  filterTitle.textContent = "All Items";
});

// After rendering manu items
document.querySelectorAll(".menu-card").forEach(menuCard => {
  menuCard.addEventListener("click", () => {
    const selectedItem = menuCard.querySelector("p").textContent.toLowerCase();
    const filteredItems = food.filter(item =>
      item.name.toLowerCase().includes(selectedItem)
    );
    renderCards(filteredItems);
  });
});
