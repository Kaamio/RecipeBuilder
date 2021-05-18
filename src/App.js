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


const App = () => {

  const [ingredients, setIngredients] = useState([])  
  const [currentRecipe, setCurrentRecipe] = useState([])
  const [searchState, setSearchState ] = useState('')
  const [shownIngredients, setShownIngredients] = useState([])
  const [alertMessage, setAlertMessage] = useState(null)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    ingredientService
    .getAll()
    .then(response=> {           
      setIngredients(response.data)     
  })

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
      <div>
        <Link to="/" className = "navigation">home</Link>
        <Link to="/ingredients" className = "navigation"> Ingredients</Link>
        <Link to="/recipes" className = "navigation">Recipes</Link>
      </div>  
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
      <AvailableIngredients ingredients={ingredients} />
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
