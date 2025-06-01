import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"; // ✅ Assuming your Navbar is here
import Cart from "./pages/Cart";          // optional pages
import Contact from "./pages/ContactModal";
import Signup from "./pages/SignupModal";
import Login from "./pages/LoginModal";

function App() {
  return (
    <BrowserRouter>
   
      <Navbar />

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
