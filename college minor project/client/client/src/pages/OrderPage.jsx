import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import "./style/OrderPage.css";

const OrderPage = () => {
  const [orderData, setOrderData] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [orderID, setOrderID] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    // if (cart.length === 0) {
    //   navigate("/categories");
    // }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setOrderData(cart);
    setOrderTotal(total);
    setOrderID("ORD" + Math.floor(Math.random() * 1000000));
    localStorage.removeItem("cartItems");
  }, [navigate]);

  return (
    <div className="order-container">
      <h1>
        <IonIcon icon={cartOutline} style={{ marginRight: "10px" }} />
        Order Confirmed
      </h1>
      <p>Thank you for your order!</p>
      <p><strong>Order ID:</strong> {orderID}</p>

      <div className="order-summary">
        {orderData.map((item, index) => (
          <div key={index} className="order-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price}</p>
              <p>Total: ₹{item.quantity * item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Total Amount: ₹{orderTotal}</h2>
      <button onClick={() => navigate("/categories")}>Back to Menu</button>
    </div>
  );
};

export default OrderPage;
