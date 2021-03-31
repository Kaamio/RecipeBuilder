import React from 'react'

const Recipe = (props) => {   



const create = () => {
    const recipeToCreate = {}
    const elements = document.querySelectorAll('.recipeAmountInput')
    for (let elem = 0; elem < elements.length; elem++) {       
        recipeToCreate[elements[elem].id] = elements[elem].value      
    }
    // TO DO: Create recipe to database
    console.log(recipeToCreate)
}

    return ( 
    <div>

        <form onSubmit={() => create()}>
            <div>
        <ul>
            <p>Recipe Name <input id='recipe_name' /> </p>
            {props.recipe.map(item =>                           
                <li>{item} <input id = {item} maxLength="3" size="2" className = "recipeAmountInput"/> </li>                
            )}
            
        </ul>     
        </div>
        <button type="submit">Create Recipe</button>
        </form>        
                
                
        </div>  
    )   
}

export default Recipe