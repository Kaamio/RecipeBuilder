import React, { useEffect } from 'react'
import RecipeService from '../services/recipes'


const Recipe = (props) => {   
    
    useEffect(() => {
        RecipeService
        .getAll()
        .then(response => 
        props.setRecipes(response.data))     
      })

    const ingredientsInRecipe = props.ingredients.filter(item => props.recipe.includes(item.name))   
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    

    const create = (recipename) => {         
        
        let costs = ingredientsInRecipe.map(ingredient => ingredient.cost)


        const recipeToCreate = {}

        const elements = document.querySelectorAll('.recipeAmountInput')
        for (let elem = 0; elem < elements.length; elem++) {       
            recipeToCreate[elements[elem].id] = elements[elem].value      
        }                 

        const recipe = {
            name: recipename,
            ingredients : [recipeToCreate],
            totalcost: costs.reduce(reducer)
        }
        
        RecipeService.create(recipe)
        props.setAlertMessage(`Recipe ${recipe.name} created!`)
        setTimeout(() => {
            props.setAlertMessage(null)
          }, 5000)
    }

    if(props.recipe.length === 0 ) {
        return <div></div>
    }

    return ( 
    <div>       
        <div>
            <p>Recipe Name <input id='recipe_name'/> </p>
            <ul>            
            {props.recipe.map(item =>                           
                <li>
                {item} <input id = {item} maxLength="3" size="2" className = "recipeAmountInput"/> 
                <button onClick = {() => props.handleRemove(item)}>Remove</button> 
                </li>                
            )}
            
        </ul>     
        </div>
        <button onClick = {() => create(document.querySelectorAll('#recipe_name')[0].value)}>Create</button>
             
        </div>  
    )   
}

export default Recipe