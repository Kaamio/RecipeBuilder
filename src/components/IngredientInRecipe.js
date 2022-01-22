import React from 'react'


const Ingredient = (props) => {

    return ( 
            <div class='Ingredient'>            
             <p>{props.ingredient.name}</p>
             <img alt='pic of ingredient' width="150" height="70" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single.jpg/1920px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single.jpg'></img>            
             <button onClick = {() => props.handleRecipeAdd(props.ingredient.name)}>Add</button>                        
             </div>  
    )
}

export default Ingredient
