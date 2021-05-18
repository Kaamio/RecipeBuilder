import React from 'react'
import Ingredient from './Ingredient'


const IngredientList = ({ingredients, currentIngredients, handleRecipeAdd}) => {

if (currentIngredients.length === 0) {
    return (
        <div>         
        <ul>
        {ingredients.map(item =>                           
            <Ingredient  ingredient={item} handleRecipeAdd={handleRecipeAdd}/>
          )} 
    </ul>
    </div>
    )
}
 return (
     <div>         
    <ul>
    {currentIngredients.map(item =>                           
        <Ingredient ingredient={item} handleRecipeAdd={handleRecipeAdd} />
      )} 
</ul>
</div>
 )
}


export default IngredientList