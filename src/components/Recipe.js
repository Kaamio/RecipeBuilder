import React, { useEffect } from 'react'
import RecipeService from '../services/recipes'
import styled  from 'styled-components'

import StyledInput from './elements/input'
import StyledButton from './elements/button'

/*
const RecipeName = styled.input`
font-size: 20px;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: 4px solid #db4f1d;
border-radius: 4px;
`

const CreateButton = styled.button`
background-color: #008CBA;
border: none;
color: white;
padding: 15px 32px;
margin-top: 10px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 20px;
&:hover {
    color:blue;
    cursor:pointer;
}
`
*/
const RecipeTableRow = styled.td`
padding:15px;

`

const Recipe = (props) => {   
      
    useEffect(() => {
        RecipeService
        .getAll()
        .then(response => 
        props.setRecipes(response.data))     
      },[] )

    const ingredientsInRecipe = props.ingredients.filter(item => props.recipe.includes(item.name))   
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    

    const create = async (recipename) => { 
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
        const response = await RecipeService.create(recipe)
        if (response.status === 200) {
        props.setAlertMessage(`Recipe ${recipe.name} created!`)
        setTimeout(() => {
            props.setAlertMessage(null)
          }, 5000)  
            } else {
                props.setAlertMessage(response.error)
                setTimeout(() => {
                  props.setAlertMessage(null)
                }, 5000)        
          }
    }

    if(props.recipe.length === 0 ) {
        return <div></div>
    }

    return ( 
    <div>       
        <div>
            <StyledInput id='recipe_name' placeholder="Give a name to your recipe!"/>             
            <table>
                <tbody>
                <tr>
                  <th>Ingredient</th> 
                  <th>Grams</th>
                  <th>Remove</th>
                </tr>            
            {props.recipe.map(item =>                        
                <tr>
                <RecipeTableRow key ={item.id}>{item}</RecipeTableRow> 
                <RecipeTableRow key ={item.id}><input id = {item} maxLength="3" size="2" className = "recipeAmountInput"/></RecipeTableRow>
                <RecipeTableRow key ={item.id}><button onClick = {() => props.handleRemove(item)}>Click to remove</button></RecipeTableRow>
                </tr>                
            )}
          </tbody>  
        </table>     
        </div>
        <StyledButton onClick = {() => create(document.querySelectorAll('#recipe_name')[0].value)}>Create recipe</StyledButton>
             
        </div>  
    )   
}

export default Recipe