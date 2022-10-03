import React from "react";
import logo from "../assets/JoystickLogoDUO.png";
import "./styles/Reglement.css";
import { Link } from "react-router-dom";

const Reglement = () => {
  return (
    <div className="PageReglement">
      <img src={logo} alt="logo" className="LogoDuoMoyen" />
      <div className="IntroReglement">
        <h4>“ Bienvenue sur JOYSTICK,</h4>
        <p>
          la plateforme de mise en relation entre acheteur et vendeur{" "}
          <span className="bold">non-professionnel</span> de jeux vidéo.”
        </p>
      </div>
      <div className="ContenuReglement">
        <h5>COMPRENDRE JOYSTICK C’EST SIMPLE :</h5>
        <ul>
          <li>IDENTIFICATION du membre</li>
          <li>CHOIX du rôle membre = Vendre ou Acheter</li>
          <li>NAVIGATION sur le site selon le besoin</li>
          <li>
            CONTACT entre les membres acheteurs et vendeurs par transmission
            d’un numéro de téléphone ou par email
          </li>
        </ul>

        <h5>Avec JOYSTICK, vous aurez la possibilité de :</h5>
        <ul>
          <li>Naviguer au travers des différentes annonces</li>
          <li>
            Filtrer vos recherches selon la plateforme, le type de jeux et la
            gamme de prix visée
          </li>
          <li>Créer et modifier votre propre panier de choix</li>
          <li>Prendre connaissance du coût total de votre panier en cours</li>
          <li>Entrer en contact avec les vendeurs</li>
          <li>Consulter des informations sur vos achats passés</li>
          <li>Mettre en vente des jeux vidéos</li>
          <li>Consulter et mettre à jour votre liste de jeux à vendre</li>
          <li>Être contacter par de futurs acheteurs</li>
        </ul>

        <hr className="hr" />

        <h5>
          INFORMATIONS DESTINES AUX NOUVEAUX UTILISATEURS DE LA PLATEFORME :
        </h5>
        <p>
          Nous vous invitons, dès votre première visite, à vous créer un compte
          utilisateur.
        </p>

        <h5>Pourquoi cela ? </h5>
        <p>
          Cela facilitera votre navigation et vos actions sur le site. Et
          egalement, cela permettra de créer des interactions avec les autres
          membres de la plateforme.
        </p>
      </div>
      <Link to="/connection"><button className="bouton">ACCEDER A LA PAGE DE CONNEXION</button>
</Link>
    </div>
  );
};

export default Reglement;
