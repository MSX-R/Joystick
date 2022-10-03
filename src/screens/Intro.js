import React from "react";
import "./styles/Intro.css";
import logo from "../assets/LogoAchat.png";
import { Link } from "react-router-dom";

const Bienvenue = () => {
  return (
    <div className="WelcomePage">
      <Link to="/reglement">
      <img src={logo} alt="logo" className="LogoWelcomePage" /></Link>
    </div>
  );
};

export default Bienvenue;
