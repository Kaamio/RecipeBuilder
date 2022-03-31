import React from 'react'
import Ingredient from './IngredientInRecipe'


const IngredientList = ({ingredients, searchState,  showAll, handleRecipeAdd}) => {

const showFiltered = ({ingredients, searchState}) => {      
    return (
    ingredients.filter(ingredient =>ingredient.name.toLowerCase().includes(searchState.toLowerCase()))
    )
  }

 return( showAll ? ingredients.map(item =>
    <Ingredient key = {item.name} ingredient={item} handleRecipeAdd={handleRecipeAdd} />)
    : showFiltered({ingredients , searchState}).map(item =>  <Ingredient key = {item.name} ingredient={item} handleRecipeAdd={handleRecipeAdd} />)
    )}

export default IngredientList

