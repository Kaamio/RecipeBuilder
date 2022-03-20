import React from 'react'


const IngredientToAdd = ({ingredient,handleDeleteIngredient }) =>  {

   
    return ( <div className = 'IngredientToAdd'>            
    <p>{ingredient.name} <button onClick = {() => handleDeleteIngredient(ingredient.id)}>Delete</button>  </p>
    </div>  
    )

}


export default IngredientToAdd