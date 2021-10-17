import React, { useState , useEffect } from 'react';
import logo from './logo.png';



import './style.css'


function CalzoneAlForno() {


  const [pizzas, setPizzas] = useState([])
  const BASE_URL = 'https://q8zbks9a4l.execute-api.eu-central-1.amazonaws.com/Prod'
  const key = 'OwekZi1fkt3VlmA7r20fv6m4jAVLDh6iaF5C41al'
  
  useEffect(() => {
    fetchPazzas()
  }, [])

 

  async function fetchPazzas() {
    const pizzas = await fetch(BASE_URL + '/pizzas', { headers: {'x-api-key': key , } , })
    const result = await pizzas.json()
     const filter = result.filter(el => el.name == "Calzone al Forno")
     const logo = filter.map(el => el.image)
    setPizzas(filter)
    setTimeout(test, 5000);
    console.log(logo);
    console.log(filter);
  }
  
  function test() {
   
    console.log(pizzas);
    // console.log(filter)
    // console.log(pizzas)
}



    return (
      <div id='blokPizza'>


        <div id= "vagaD">
        
        <div id='type1'>480g</div>
        <div id='d'>30cm</div>


        </div>
        


        <div>
        {pizzas.map((el) => 
        <img id = "logoPizza" src={el.image} /> )}          
        </div>
        <div id= "PizzaName">Calzone al Forno</div>        
        <div id="opys">tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes.</div>
        
              
        <div id="add">
        <div id="flex">
                <div id='type2'>220</div>
                <div id="ua">UAH</div>
        </div>


        <div id="flex">
                <div> <button id="plus">+</button></div>
                <div id='quantity'>0</div>
                <div> <button id="plus">-</button></div>
        </div>
      
        <div>
                <button id="submit">Add</button>
        </div>



          
        </div>
       




        


     </div>
    
  )
}

export default CalzoneAlForno