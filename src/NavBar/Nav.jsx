import React from "react";
import "./Nav.scss";
import onshoes from "../assets/onshoes.png";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import MenuIcon from "@mui/icons-material/Menu";
import { slide as Menu } from "react-burger-menu";
import burgericon from "../assets/burger-icon.png";
import SearchIcon from "@mui/icons-material/Search";
import search from "../assets/search.png";
const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-base">
        <img src={onshoes} />
        <h4>OnShoes</h4>
        <div className="nav-links">
          <a href="/" className="promotions">
            Promocje
          </a>

          <a href="/" className="myadmin">
            MyAdmin
          </a>

          <a href="/" className="account">
            Konto
          </a>
          <a href="/" className="shopping-cart">
            Koszyk
          </a>
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
        </Menu>
      </div>
    </div>
  );
};

export default Nav;
