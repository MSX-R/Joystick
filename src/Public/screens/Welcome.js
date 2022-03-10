import React from 'react'
import './style/Welcome.css'
import { Link } from 'react-router-dom'


const Welcome = () => {
  return (

<div>
<Link to="/Choice" className="context">
<h1>JOYSTICK</h1>
    <h3>La passion du jeu vidéo</h3>
</Link>


<div class="area" >
    <ul class="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    </ul>

</div>
</div>
  )
}

export default Welcome    


{/* <div className='Welcome-Page css-selector '>
        <Link to="/Choice" className='logo'> Clique pour entrer sur le site !</Link>
    </div> */}