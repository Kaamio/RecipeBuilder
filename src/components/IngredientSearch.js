import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'

import Ingredient from './Ingredient'

const IngredientSearch = (ingredients, setIngredients) => {

const [searchState, setSearchState ] = useState('')
const [shownIngredients, setShownIngredients] = useState([])
const [resultLentgh, setResultLength] = useState(0)


const IngredientList = ({ingredients}) => {
    if ((resultLentgh === 0) || (resultLentgh > 10)) {
      return ('Speficy your search') }    
      else {          
        return(                     
            shownIngredients.map(ingredient =>
                <li>
                <Ingredient name={Ingredient.name} />
                </li>)                                        
          )}
     }  

const findIngredients = ({ingredients, searchState}) => {      
    return (
    ingredients.ingredients.filter(ingredient =>ingredient.name.toLowerCase().includes(searchState.toLowerCase()))
    )
} 

const handleSearch = (event) => {
    setSearchState(event.target.value) 
    let result = findIngredients({ingredients, searchState})    
    setResultLength(result.length)  
    setShownIngredients(result) 
    console.log(shownIngredients)      
}

return (
    <div>
    <div>        
        <p>
        Find ingredients
        <input value = {searchState} 
        onChange= {handleSearch}
        /> 
        </p>         
    </div>
    
    <div>
        <ul>
            {shownIngredients.map(item =>                           
                <Ingredient ingredient={item} />
              )} 
        </ul>
    </div>       
    </div> 
    )
}

export default IngredientSearch

//<IngredientList ingredients = {shownIngredients}/> 