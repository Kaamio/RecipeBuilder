import React from 'react'


const Ingredient = (props) => {

    return ( <div>            
             <p>{props.ingredient.name}</p>             
             <button onClick = {() => props.handleRecipeAdd(props.ingredient.name)}>Add</button>                        
             </div>  
    )
}

export default Ingredient
