import React, { useState, useRef, useEffect } from 'react'
import Recipe from './components/Recipe'
import IngredientSearch from './components/IngredientSearch'

import ingredientService from './services/ingredients'


const App = () => {

  const [ingredients, setIngredients] = useState([])
  

  useEffect(() => {
    ingredientService
    .getAll()
    .then(response=> {           
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
