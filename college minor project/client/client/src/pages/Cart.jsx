import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartData(storedCart);
  }, []);

  const handleIncrease = (index) => {
    const newCart = [...cartData];
    newCart[index].quantity++;
    updateCart(newCart);
  };

  const handleDecrease = (index) => {
    const newCart = [...cartData];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      updateCart(newCart);
    }
  };

  const handleDelete = (index) => {
    const newCart = [...cartData];
    newCart.splice(index, 1);
    updateCart(newCart);
  };

  const updateCart = (newCart) => {
    localStorage.setItem("cartItems", JSON.stringify(newCart));
    setCartData(newCart);
  };

  const totalAmount = cartData.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cartData.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container">
      <div className="main-wrapper">
        {/* Left Section */}
        <div className="left-section">
          <div className="top-bar">
            <p>{totalQuantity} item(s) you have selected</p>
            <Link to="/categories"><p className="explore">Explore More</p></Link>
          </div>

          <div id="cartSection">
            {cartData.map((item, index) => (
              <div className="card" key={index}>
                <div className="card-info">
                  <img src={item.image} alt={item.title} className="food-img" />
                  <div>
                    <h1 className="food-title">{item.title}</h1>
                    <p className="food-desc">{item.description}</p>
                    <span className="tag">{item.tag || "veg"}</span>
                  </div>
                </div>
                <div className="card-price">
                  <p className="price">₹{item.price}</p>
                  <div className="qty-controls">
                    <button className="delete-item" onClick={() => handleDelete(index)}>🗑️</button>
                    <button className="decrease" onClick={() => handleDecrease(index)}>-</button>
                    <p>{item.quantity}</p>
                    <button className="increase" onClick={() => handleIncrease(index)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="summary-box">
            <h2 className="summary-title">Price Details</h2>
            <div className="divider"></div>
            <div className="summary-item">
              <p>Total</p>
              <p className="bold">₹{totalAmount}</p>
            </div>
            <div className="summary-item">
              <p>Delivery Fee</p>
              <p className="green">Free</p>
            </div>
            <div className="divider"></div>
            <div className="summary-item space-between">
              <p>Total Amount</p>
              <span>Item - {totalQuantity}</span>
              <p className="total-price">₹{totalAmount}</p>
            </div>
            <div className="order-button">
              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
