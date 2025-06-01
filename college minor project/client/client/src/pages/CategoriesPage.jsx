import React, { useEffect, useState } from "react";
import { food, manu } from "../data/fooditem";

export default function CategoriesPage() {
  const [displayedItems, setDisplayedItems] = useState(food);
  const [filterTitle, setFilterTitle] = useState("All Items");

  const handleAddToCart = (item) => {
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
  };

  const handleFilter = (type) => {
    if (type === "clear") {
      setDisplayedItems(food);
      setFilterTitle("All Items");
    } else if (type === "low-high") {
      setDisplayedItems([...food].sort((a, b) => a.pices - b.pices));
      setFilterTitle("Showing: Cost Low to High");
    } else if (type === "high-low") {
      setDisplayedItems([...food].sort((a, b) => b.pices - a.pices));
      setFilterTitle("Showing: Cost High to Low");
    } else {
      const filtered = food.filter(item => item.type.toLowerCase() === type);
      setDisplayedItems(filtered);
      setFilterTitle(`Showing: ${type.charAt(0).toUpperCase() + type.slice(1)} Items`);
    }
  };

  const handleSearch = () => {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filtered = food.filter(item => item.name.toLowerCase().includes(searchValue));
    setDisplayedItems(filtered);
  };

  const handleMenuClick = (name) => {
    const selectedItem = name.toLowerCase();
    const filteredItems = food.filter(item => item.name.toLowerCase().includes(selectedItem));
    setDisplayedItems(filteredItems);
  };

  return (
    <div>
      <div id="input-search">
        <input type="search" id="search" placeholder="Search For Your Food Item" />
        <button onClick={handleSearch}><ion-icon name="search-outline"></ion-icon></button>
      </div>

      <div className="menu-scroll">
        {manu.map((item, index) => (
          <div key={index} className="menu-card" onClick={() => handleMenuClick(item.name)}>
            <img src={item.img} alt="food" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <div className="filters">
        <label onClick={() => handleFilter("veg")}>Veg</label>
        <label onClick={() => handleFilter("non-veg")}>Non-Veg</label>
        <label onClick={() => handleFilter("sweet")}>Sweet</label>
        <label onClick={() => handleFilter("low-high")}>Cost: Low to High</label>
        <label onClick={() => handleFilter("high-low")}>Cost: High to Low</label>
        <label style={{ color: "red" }} onClick={() => handleFilter("clear")}>Clear Filters</label>
      </div>

      <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>{filterTitle}</p>

      <div className="cards">
        {displayedItems.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.name} />
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="delites">
              <p> ⭐{item.rating} | {item.time} min | {item.type}</p>
            </div>
            <div className="bottom-row">
              <strong>₹{item.pices}</strong>
              <button className="add-to-cart" onClick={() => handleAddToCart(item)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-float-btn">
        <a href="/Docs/cart.html"><ion-icon name="cart-outline"></ion-icon></a>
      </div>
    </div>
  );
}
