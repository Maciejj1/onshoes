import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import onshoes from "../assets/onshoes.png";
import { auth } from "../Config.js/Config.js";
import "./Login.scss";
const Login = () => {
  const history = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const LoginForm = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(Email, Password).then(() => {
      setEmail("");
      setPassword("");
      history("/");
    });
  };
  return (
    <div className="login-container">
      <div className="login-base">
        <form onSubmit={LoginForm} className="login-form">
          <div className="login-form-title">
            <img src={onshoes} />
            <h4>OnShoes</h4>
          </div>
          <label htmlFor="email" />
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password" />
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Zaloguj</button>
          <br />
          <button>Zaloguj się z google</button>
        </form>
        <div className="login-to-register">
          <p>Nie masz konta?</p>
          <Link to="/register">Zarejestruj się</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
