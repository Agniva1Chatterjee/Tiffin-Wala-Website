// Categories.js
import { food } from '../data/fooditem.js';

const cardContainer = document.getElementById("cardContainer");

food.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}" />
    <div class="card-content">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
     
    </div>
    <div class ="delites">   <p> ⭐${item.rating} | ${item.time} min | ${item.type}</p> </div>
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
