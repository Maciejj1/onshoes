import "./App.scss";
import Nav from "./NavBar/Nav";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductContextProvider } from "./Products/ProductsContext";
import Login from "./LoginForm/Login";
import Register from "./Register/Register.jsx";

import Cart from "./Cart/Cart";
import { CartContextProvider } from "./Cart/CartContext";
import ProductDetail from "./ProductDetailPage/ProductDetail";
import Products from "./Products/Products";
function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cartproducts" element={<Cart />} />
              <Route path="/:id" element={<ProductDetail />} />
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
