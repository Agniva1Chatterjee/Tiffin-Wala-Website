import React from 'react';

const Navbar = ({ openContact, openSignup }) => {
  return (
    <nav id="navbar">
      <div className="nav1">
        <div className="logo-container"></div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="Categories.html">Categories</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openContact(); }}>Contact Us</a></li>
          <li><a href="#">Suggestion</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openSignup(); }}>Sign Up</a></li>
          <li><a href="cart.html"><ion-icon name="cart-outline"></ion-icon></a></li>
        </ul>
      </div>
      <div className="section">
        <h1>WELCOME TO OUR WEBSITE</h1>
        <div className="left">
          Order Delicious <br />
          Food Item <button>Continue</button>
        </div>
        <div className="right">
          <h2>Select Your City</h2>
          <select name="city" id="city">
            <option value="Kolkata">Kolkata</option>
            <option value="Burdwan">Burdwan</option>
            <option value="Uluberia">Uluberia</option>
            <option value="Budge Budge">Budge Budge</option>
          </select>
          <button id="Btn">Find Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
