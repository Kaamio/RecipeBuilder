import React, { useState, useRef, useEffect } from 'react'
import Recipe from './components/Recipe'
import Alert from './components/Notification'
import IngredientSearch from './components/IngredientSearch'
import Ingredient from './components/Ingredient'
import ingredientService from './services/ingredients'


const App = () => {

  const [ingredients, setIngredients] = useState([])  
  const [currentRecipe, setCurrentRecipe] = useState([])
  const [searchState, setSearchState ] = useState('')
  const [shownIngredients, setShownIngredients] = useState([])
  const [resultLength, setResultLength] = useState(0)
  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => {
    ingredientService
    .getAll()
    .then(response=> {           
      setIngredients(response.data)     
  })
  },[])


  const Create = (added_ingredient) => {
    console.log("aea")
  }

  
  const findIngredients = ({ingredients, searchState}) => {      
    return (
    ingredients.filter(ingredient =>ingredient.name.toLowerCase().includes(searchState.toLowerCase()))
    )
  }

  const handleSearch = (event) => {
    setSearchState(event.target.value) 
    let result = findIngredients({ingredients, searchState})    
    setResultLength(result.length)  
    setShownIngredients(result)        
}

  const handleRecipeAdd = (item) => {
    if (currentRecipe.includes(item)) {
      setAlertMessage(`Ingredient ${item} is allready added to the recipe`)

      setTimeout(() => {
        setAlertMessage(null)
      }, 5000)
    }
    else {
    setCurrentRecipe(currentRecipe.concat(item))
    }
  };
   
  const test = () => {
    console.log('testifunktio')
  }

  return (
  <div>
    <Alert message = {alertMessage}></Alert>  
    <h1>
      Recipe bank
    </h1>    
      <div>
        <IngredientSearch searchState={searchState} shownIngredients={shownIngredients} handleSearch={handleSearch} />              
      </div>
      <div>            
        <ul>
            {shownIngredients.map(item =>                           
                <Ingredient ingredient={item} handleRecipeAdd={handleRecipeAdd}/>
              )} 
        </ul>
    </div>                
      <div>      
      <button onClick={Create}>Create recipe</button> 
      </div>
      <Recipe recipe={currentRecipe} saveRecipe={test}></Recipe>
  </div>
  );
}

export default App;
