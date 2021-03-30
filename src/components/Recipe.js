import React from 'react'
import Ingredient from './Ingredient'
import { useState, useRef, useEffect } from 'react'
const Recipe = (props) => {
   
//console.log(props.currentRecipe)

const create = () => {
    console.log('resepti')
}

    return ( <div> 
        <ul>
            {props.recipe.map(item =>                           
                <p>{item}</p>
            )} 
        </ul>      
                
        <button onClick={() => create}> nappi </button>            
        </div>  
    )   
}

export default Recipe