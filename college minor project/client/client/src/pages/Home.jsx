import React, { useState } from 'react';
import Navbar from '../components/Navbar';
// import Carousel from './Carousel';
import ContactModal from './ContactModal';
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';
// import './styles/Style1.css';

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar 
        openContact={() => setShowContact(true)} 
        openSignup={() => setShowSignup(true)} 
      />
      <section id="SectionBar">
        <div className="searchbar-container">
          <label htmlFor="searchBar">
            <div className="icon-holder">
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </label>
          <input type="text" id="searchBar" placeholder="  Search Food Items" />
        </div>
        <Carousel />
      </section>

      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
      <SignupModal 
        isOpen={showSignup} 
        onClose={() => setShowSignup(false)} 
        switchToLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }} 
      />
      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
      />
    </>
  );
};

export default Home;
