import React from 'react'
import styled  from 'styled-components'
import StyledButton from './elements/button'
import { format,parseISO } from 'date-fns'

const AddIngredient= styled.div`
padding: 1em;
width:90%;
font-size: 18px;
border-style: solid;
border-radius: 1em;
margin-bottom: 1em; 
display: grid;
row-gap: 1px;
grid-template-columns: 33% 33% 33%;
`

const IngredientName = styled.h3`
grid-column-start: 1;
grid-column-end: 3;
font-size: 24px;
margin: 2px;
`

const Attributes = styled.div`
grid-column-start: 2;
grid-column-end: 2;
`

const IngredientImage = styled.img`
grid-column-start: 1;
grid-column-end: 1;
grid-row-start: 2;
grid-row-end: 2;
margin-bottom: 3px;
`


const Ingredient = (props) => {        
   

    return ( 
            <div> 
             <AddIngredient>                       
                <IngredientName>              
                    {props.ingredient.name}
                </IngredientName>                     
                <Attributes>
                    <p>Created: {format(parseISO(props.ingredient.created), 'dd.MM.yyyy')}</p>
                    <p>Category: {props.ingredient.category}</p>
                    <p>Price: {props.ingredient.cost}</p>
                    <p>Unit: {props.ingredient.unit}</p>
                    <p>Complexity: {props.ingredient.complexity}</p>
                </Attributes>                   
                <IngredientImage alt='pic of ingredient' width="128" src={props.ingredient.pic} />
                    <br/>
                    <StyledButton  onClick = {() => props.handleRecipeAdd(props.ingredient.name)}> Add  </StyledButton>            
                
             </AddIngredient>                        
             </div>  
    )
}

export default Ingredient



//<AddButton onClick = {() => props.handleRecipeAdd(props.ingredient.name)}>Add</AddButton>  