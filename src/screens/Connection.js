import React from "react";
import log from "../assets/profil(1).png";
import "./styles/Connection.css";

const Connection = () => {
  return (
    <div className="PageConnection">
      <img src={log} alt="imagelog" className="iconeLog" />
      <h2>CONNECTION</h2>

      <div>
        <p>Vous avez déjà un compte membre ?</p>
        <p>Identifiez-vous dès maintenant !</p>
      </div>

      <div className="LogPass">
        LOGIN
        {/* <input placeholder="Entrez votre identifiant"/></input> */}
        <input type="text" />
        PASSWORD
        <input type="text" />
        <p>mot de passe oublié ?</p>
      </div>
    </div>
  );
};

export default Connection;
