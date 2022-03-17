import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import Nav from "../NavBar/Nav";
import { ic_add } from "react-icons-kit/md/ic_add";
import { ic_remove } from "react-icons-kit/md/ic_remove";
import { iosTrashOutline } from "react-icons-kit/ionicons/iosTrashOutline";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../Config.js/Config";
import { Icon } from "react-icons-kit";
export const Cart = ({ user }) => {
  const { shoppingCart, dispatch, totalPrice, totalQty } =
    useContext(CartContext);
  const history = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history("/login");
      }
    });
  });
  return (
    <div className="cart-container">
      <Nav />
      <div className="cart-base">
        {shoppingCart.length !== 0 && <h1>Koszyk</h1>}
        {shoppingCart.length === 0 && (
          <>
            <div>Nie ma nic? Zaloguj się lub odśwież stronę</div>
            <div>
              <Link to="/">Wróć na główną stronę</Link>
            </div>
          </>
        )}
        {shoppingCart &&
          shoppingCart.map((cart) => (
            <div className="cart-card" key={cart.ProductID}>
              <div className="cart-img">
                <img src={cart.ProductImg} alt="nie wczytało :(" />
              </div>
              <div className="cart-name">{cart.ProductName}</div>
              <div className="cart-price-original">{cart.ProductAmount}</div>
              <div
                className="inc"
                onClick={() =>
                  dispatch({ type: "INC", id: cart.ProductID, cart })
                }
              >
                <Icon icon={ic_add} size={23} />
              </div>
              <div
                className="dec"
                onClick={() =>
                  dispatch({ type: "DEC", id: cart.ProductID, cart })
                }
              >
                <Icon icon={ic_remove} size={23} />
              </div>
              <div className="cart-price">{cart.TotaProductPrice}</div>
              <button
                className="delete-btn"
                onClick={() =>
                  dispatch({ type: "DELETE", id: cart.ProductID, cart })
                }
              >
                <Icon icon={iosTrashOutline} size={24} />
              </button>
            </div>
          ))}
        {shoppingCart.length > 0 && (
          <div className="cart-summary">
            <div className="cart-summary-heading">Cart-summary</div>
            <div className="cart-summary-price">
              <span>Total price</span>
              <span>{totalPrice}</span>
            </div>
            <div className="cart-summary-price">
              <span>Total Qty</span>
              <span>{totalQty}</span>
            </div>
            <Link to="cashout" className="cashout-link">
              <button className="btn btn-succes btn-md">Cash delivery</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
