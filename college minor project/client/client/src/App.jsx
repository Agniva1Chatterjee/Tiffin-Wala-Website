import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar"; // ✅ Assuming your Navbar is here
import Cart from "./pages/Cart";          // optional pages
import Contact from "./pages/ContactModal";
import Categories from "./pages/CategoriesPage";
import Signup from "./pages/SignupModal";
import Login from "./pages/LoginModal";
import OrderPage from "./pages/OrderPage";
import Error from "./pages/Error";
import Logout from "./pages/Logout";

function App() {
  return (
    <BrowserRouter>
   
      {/* <Navbar /> */}

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/order" element={<OrderPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
