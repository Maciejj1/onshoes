import { InputUnstyled } from "@mui/base";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { auth, db } from "../Config.js/Config.js";
const Register = () => {
  const history = useNavigate();
  const [NameSurname, setNameSurname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const RegisterForm = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(Email, Password).then((cred) => {
      db.collection("UsersData")
        .doc(cred.user.uid)
        .set({
          NameSurname: NameSurname,
          Email: Email,
          Password: Password,
        })
        .then(() => {
          setEmail("");
          setNameSurname("");
          setPassword("");
          history("/login");
        });
    });
  };
  return (
    <div className="register-form-container">
      <div className="register-form-base">
        <form className="register-form" onSubmit={RegisterForm}>
          <label htmlFor="text" />
          <input
            type="text"
            value={NameSurname}
            onChange={(e) => setNameSurname(e.target.value)}
            placeholder="Imie i nazwisko"
          />
          <br />
          <label htmlFor="email" />
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <br />
          <label htmlFor="password" />
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="hasło"
          />
          <br />
          <label htmlFor="image" />
          <input type="file" />
          <br />
          <button type="submit">Zarejestruj</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
