import React from "react"
import './style.css'
// import Diabola from './Components/Pizza/Diabola/Diabola';
// import Diabola from './Components/Pizza/Diabola/Diabola'
import Diabola from "./Pizza/Diabola/Diabola"
import CalzoneAlForno from "./Pizza/Calzone al Forno/CalzoneAlForno"
import Peperoni from "./Pizza/Peperoni/Peperoni"





function Blok3() {
    return (
      <div id= 'blok3'>
        <CalzoneAlForno />
        <Diabola />
        <Peperoni/>
     </div>
    // <Diabola/>
  )
}




export default Blok3