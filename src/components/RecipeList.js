import React from 'react'


const RecipeList = ({recipes}) => {
    
    if(recipes.length === 0) {
        return (
        <div>
            <h2>No recipes created</h2>
        </div>
        )
    }

    

    return (
        <div>
            <h2>Saved recipes</h2>
        <div>
            {recipes.map(recipe =>            
            <div> 
            <h3>{recipe.name}</h3>            
            <ul>
                {Object.entries(recipe.ingredients[0]).map(([ property, value ]) => 
                    <li>{property}, {value}</li>
                )}                                   
                <p>Total cost: {recipe.totalcost}</p>                
            </ul>
            </div>        
            )}
        </div>
        </div>
    )     
        
    
}

export default RecipeList