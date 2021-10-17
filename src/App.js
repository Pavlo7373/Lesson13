import logo from './logo.svg';
import React, { useState , useEffect } from 'react';
// import vector from './vector.svg';
// import vector from '.vector.svg';
import './App.css';
import Header from './Components/Header/Header';
// import Diabola from './Components/Pizza/Diabola/Diabola';
import Blok3 from './Components/Blok3/Blok3';

function App() {
  const [pizzas, setPizzas] = useState([])
  const BASE_URL = 'https://q8zbks9a4l.execute-api.eu-central-1.amazonaws.com/Prod'
  const key = 'OwekZi1fkt3VlmA7r20fv6m4jAVLDh6iaF5C41al'
  
  useEffect(() => {
    fetchPazzas()
  }, [])

 

  async function fetchPazzas() {
    const pizzas = await fetch(BASE_URL + '/pizzas', { headers: {'x-api-key': key , } , })
    const result = await pizzas.json()
     const filter = result.filter(el => el.name == "Diabola")
    setPizzas(result)
    setTimeout(test, 5000);
    console.log(pizzas);
    console.log(filter);
  }

  
  function test() {
   
    console.log(pizzas);
    // console.log(filter)
    // console.log(pizzas)
}
 
  return (
    <div className='App'>
       <div className="App">
      <Header />
        <div><Blok3 /></div>
        
      </div>
      
      {/* {pizzas.map((el) => 
        <img src={el.image} /> )} */}
      </div>
   
  );
}

export default App;















