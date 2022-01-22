import React from 'react'


const IngredientToAdd = ({ingredient,handleDeleteIngredient }) =>  {

    return ( <div className = 'IngredientToAdd'>            
    <p>{ingredient.name}</p>                
    <button onClick = {() => handleDeleteIngredient(ingredient.id)}>Delete</button>                        
    </div>  
    )

}


export default IngredientToAdd