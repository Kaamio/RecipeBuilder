import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Recipe from './components/Recipe'
import Alert from './components/Notification'
import IngredientSearch from './components/IngredientSearch'
import ingredientService from './services/ingredients'
import recipeService from './services/recipes'
import IngredientList from './components/IngredientList'
import RecipeList from './components/RecipeList'
import AvailableIngredients from './components/AvailableIngredients'
import styled from 'styled-components'

const App = () => {

  
  const Navigation = styled.div`
  background: #659DBD;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;  
  `

  const padding = {
    padding: 5
  }
  /*
  const Page = styled.div`
  background: #DAAD86;
  padding: 1em;
  `
   */
 
  const [ingredients, setIngredients] = useState([])  
  const [currentRecipe, setCurrentRecipe] = useState([])
  const [searchState, setSearchState ] = useState('')
  const [shownIngredients, setShownIngredients] = useState([])
  const [alertMessage, setAlertMessage] = useState(null)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    ingredientService
    .getAll()
    .then(response=>            
      setIngredients(response.data))
    }, [])     
  
    useEffect(() => {  
    recipeService
    .getAll()
    .then(response => 
      setRecipes(response.data))
  },[])

  
  const findIngredients = ({ingredients, searchState}) => {      
    return (
    ingredients.filter(ingredient =>ingredient.name.toLowerCase().includes(searchState.toLowerCase()))
    )
  }

  const handleSearch = (event) => {     
    setSearchState(event.target.value)      
    let result = findIngredients({ingredients, searchState})
    setShownIngredients(result)      
              
}

  const handleRecipeAdd = (item) => {
    if (currentRecipe.includes(item)) {
      setAlertMessage(`Ingredient ${item} is already added to the recipe`)

      setTimeout(() => {
        setAlertMessage(null)
      }, 5000)
    }
    else {
    setCurrentRecipe(currentRecipe.concat(item))
    }
  };

  const handleRemove = (item) => {      
    setCurrentRecipe(currentRecipe.filter(ingredient => ingredient !== item))
  }
  

  return (
    <Router>
      <Navigation>
        <Link style={padding} to="/" >Home</Link>
        <Link style={padding} to="/ingredients" > Ingredients</Link>
        <Link style={padding} to="/recipes" >Recipes</Link>
      </Navigation>  
  <div>
    <Alert message = {alertMessage}></Alert>  
    <h1>
      Recipe bank
    </h1>
    
  <Switch> 
    <Route path="/recipes">
      <div>  
        <RecipeList recipes = {recipes} />
        </div>   
      </Route>

    <Route path = "/ingredients">
      <AvailableIngredients ingredients = {ingredients} alertMessage = {alertMessage} setAlertMessage = {setAlertMessage} setIngredients={setIngredients}/>
    </Route>

    <Route path ="/"> 
      <IngredientSearch searchState = {searchState} setSearchState = {setSearchState} handleSearch={handleSearch} />             
      <IngredientList ingredients = {ingredients} currentIngredients = {shownIngredients} handleRecipeAdd = {handleRecipeAdd} />   
      <Recipe recipe = {currentRecipe} ingredients={ingredients} setRecipes={setRecipes}  handleRemove = {handleRemove} setAlertMessage={setAlertMessage}/>
    </Route>

  </Switch>  
  </div>
  </Router>

  );
}

export default App;

