import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Recipe from './components/Recipe'
import IngredientSearch from './components/IngredientSearch'


const App = () => {

  const [ingredients, setIngredients] = useState([])
  

  useEffect(() => {
    axios
    .get('http://localhost:3001/ingredients').then(response=> {           
      setIngredients(response.data)     
  })
  },[])

  const Create = () => {
    console.log('TO DO - create recipe')
  }
   

  return (
  <div>  
    <h1>
      Recipe bank
    </h1>    
      <div>
        <IngredientSearch ingredients={ingredients} />              
      </div>
      <div>      
      <button onClick={Create}>Create recipe</button>      
      {Recipe()}
      </div>
  </div>
  );
}

export default App;
