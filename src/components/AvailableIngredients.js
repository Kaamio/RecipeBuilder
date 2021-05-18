import React from 'react'
import IngredientService from '../services/ingredients'

const AvailableIngredients = ({ingredients}) => {

    const addIngredient = (e) => {
        console.log(e)
        IngredientService.create(


        )
    }


return (
    <div>
        <h2>Ingredients</h2>
    <div>
    <form onSubmit={addIngredient()}>
        Name <input id="recipe_name"/>
        <br></br>
        Cost <input id ="recipe_cost"/>
        <br></br>
        Complexity <input id="recipe_complexity"/>
        <br></br>
        Usable <input id="recipe_usable"/>
        <br></br>
        <button type="submit">Add new</button>
      </form> 
    </div>
    <div>
    {ingredients.map(ingredient =>     
        <li id='ingredientlist'>{ingredient.name}</li>)}

        </div> 
        </div>   
)

}

export default AvailableIngredients