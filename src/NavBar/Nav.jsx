import React, { useContext } from "react";
import "./Nav.scss";
import onshoes from "../assets/onshoes.png";
import { useNavigate } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import MenuIcon from "@mui/icons-material/Menu";
import { slide as Menu } from "react-burger-menu";
import burgericon from "../assets/burger-icon.png";
import Icon from "react-icons-kit";
import SearchIcon from "@mui/icons-material/Search";
import { auth } from "../Config.js/Config";
import search from "../assets/search.png";
import { cart } from "react-icons-kit/entypo/cart";
import { CartContext } from "../Cart/CartContext";
const Nav = ({ user }) => {
  const history = useNavigate();
  const { totalQty } = useContext(CartContext);
  const handleLogOut = () => {
    auth.signOut().then(() => {
      history("/login");
    });
  };
  return (
    <div className="nav-container">
      <div className="nav-base">
        <img src={onshoes} />
        <h4>OnShoes</h4>
        <div className="nav-links">
          <a href="/" className="promotions">
            Strona Główna
          </a>
          <a href="/" className="promotions">
            Promocje
          </a>

          <a href="/" className="myadmin">
            MyAdmin
          </a>

          <a href="/" className="account">
            Konto
          </a>
          <Link to="/cartproducts" className="cart">
            <ShoppingCartIcon />
          </Link>
          <div className="relative">
            <span className="no-of-products">{totalQty}</span>
          </div>
        </div>
      </div>
      <div className="burger-menu">
        <Menu right>
          <img src={onshoes} className="menu-icon" />
          <h3>OnShoes</h3>
          <label htmlFor="text" />
          <img />
          <input
            type="text"
            placeholder="Wyszukaj produkt"
            className="menu-search"
            src={search}
          ></input>

          <a id="men" className="menu-item" href="/">
            Męskie
          </a>
          <a id="women" className="menu-item" href="/">
            Damskie
          </a>
          <a id="kid" className="menu-item" href="/">
            Dziecięce
          </a>
          <a id="aboutus" className="menu-item" href="/">
            O nas
          </a>
          <a id="contact" className="menu-item" href="/">
            Kontakt
          </a>
          {user && (
            <a id="contact" className="menu-item" href="/login">
              Zaloguj się
            </a>
          )}
          {!user && (
            <a id="contact" className="menu-item" onClick={handleLogOut}>
              Wyloguj się
            </a>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Nav;
