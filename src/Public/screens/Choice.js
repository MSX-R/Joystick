import React from 'react'
import './style/Choice.css'
import icon from '../../Zassets/profil(1).png'
import {Link} from "react-router-dom";


const Choice = () => {
  return (
    <div className='Choice-page'>
      
        <div className="navbar">
            <div className="logo2"></div>
            <div className="name"><h1>JOYSTICK</h1>
    <h3>La passion du jeu vidéo</h3></div>
            <div className='bloc-log'>
            <img src={icon} alt={icon} className="logoID"/>
                <div className="admin">Se connecter</div>
                <hr />
                <div className="creation-login">S'enregistrer</div>
            </div>
        </div>
      <div className="LinkWrapper">

        <Link to="/visiteurs">Visiteur</Link>
        <Link to="/marchands">Marchand</Link>
        <Link to="/admin">Administrateur</Link>
      </div>
    </div>
  )
}

export default Choice