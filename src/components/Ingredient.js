import React, { useState, useRef, useEffect } from 'react'


const Ingredient = (props) => {


    
const addToRecipe = (item) => {    
    console.log('aaff')
}

    return ( <div>            
             <p>{props.ingredient.name}</p>             
             <button onClick={() => props.handleRecipeAdd(props.ingredient.name)}>Add</button>            
             </div>  
    )
}

export default Ingredient
