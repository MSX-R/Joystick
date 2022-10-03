import React, { useState } from "react";
import "./style/Choice.css";
import icon from "../../Zassets/profil(1).png";

import pika from '../../Zassets/pika.png'
import spyro from '../../Zassets/spyro.svg'


const Choice = () => {
  /* SWITCH MODE BUTTON */
  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle);
  };


  return (
    <div className={toggle ? "Choice-page" : "Choice-page GoOrange"}>
      <div className={toggle ? "navbar" : "navbar GoOrange"}>
        
        <div className="Bloc-Btn">
          <button
            onClick={changeState}
            className={toggle ? "switchMode" : "switchMode GoPurple"}
          >
            {/* {toggle ? "Purple Mod" : "Orange Mod"} */}
            {toggle ? <img src={pika} alt="" className="pika-icon" /> : <img src={spyro} alt="" className="spyro-icon" />}
            
          </button>
        </div>{" "}


        <div className="name">
          <h1>JOYSTICK</h1>
          <h3>L'application de recherche de jeu vidéo d'occasion</h3>
        </div>
        <div className="bloc-log">
          <img src={icon} alt={icon} className="logoID" />
          <p className="admin">Se connecter</p>
          <hr />
          <p className="creation-login">S'enregistrer</p>
        </div>
      </div>
    </div>
  );
};


export default Choice;
