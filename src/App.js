import "./App.scss";
import Nav from "./NavBar/Nav";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductContextProvider } from "./Products/ProductsContext";
function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </div>
  );
}

export default App;
