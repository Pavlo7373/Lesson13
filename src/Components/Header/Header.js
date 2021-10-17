import vector from './vector.svg';
import cart from './cart.svg';
import React from "react"
import './style.css'


function Header() {
    return (
      <header><div id='header'>
        <div id='logoPizza2'>
          <div id='l1'> <img id='pizza' src={vector} className="App-logo" alt="logo" /></div>
          
          <div id='l2'>Omg...</div>
          <div id='textPizza'><div id='textPizza2'>Pizza</div></div>
          
        </div>
       
        {/* <div>seredyna</div> */}
        <div>
 
          <div> <img id='cart' src={cart} /></div>
          <div>0 UA</div>
         </div>
       
        </div>
      </header>
    
  )
}

export default Header

{/* <img src={vector}/> */}
{/* <div><img src= {vector} alt="альтернативный текст"></div>  */}