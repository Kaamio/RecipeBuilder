import React, { useState } from 'react'
import IngredientService from '../services/ingredients'
import IngredientToAdd from './IngredientToAdd'
import FileUpload from './FileUpload'

import styled  from 'styled-components'


const AvailableIngredients = ({ingredients, alertMessage, setAlertMessage, setIngredients}) => {

  const Input = styled.input`
    margin: 0.5em;  
    `

    const useField = (type) => {
        const [value, setValue] = useState('')
      
        const onChange = (event) => {
          setValue(event.target.value)
        }
      
        return {
          type,
          value,
          onChange
        }
      }    

      const name = useField('text')
      const cost = useField('number')
      const complexity = useField('number')
      

    const handleDeleteIngredient = (id) => {
      IngredientService.remove(id)
    } 

    const addIngredient = (event) => {  
        event.preventDefault()
        
        const newIngredient = {
            name : name.value,
            cost : cost.value,
            complexity: complexity.value
            
        } 
             
      const existingIngredientNames = ingredients.map(ingredient => ingredient.name)
              
      if( existingIngredientNames.includes(newIngredient.name) ) {
        setAlertMessage("Ingredient already exists - name must be unique")
        setTimeout(() => {
          setAlertMessage(null)
        }, 5000)
      } else {
        IngredientService.create(newIngredient)
      }               
       
    }


return (
  
    <div>            
        <h2>Ingredients</h2>
    <div>
    <form onSubmit = { addIngredient }>  
        Name:
        <Input {...name} />
        <br/>
        Cost:
        <Input {...cost} />
        <br/>
        Complexity:
        <Input {...complexity} />
        <br/>
        <FileUpload />       
        <button type="submit">Add new</button>
      </form> 

    </div>
    <div>
      {ingredients.map(ingredient=> 
      <IngredientToAdd ingredient = {ingredient}  handleDeleteIngredient = {handleDeleteIngredient} />)}
              </div> 
        </div>   
)

}

export default AvailableIngredients

/*
{ingredients.map(ingredient =>     
        <li id={ingredient.id}> {ingredient.name}</li> )}
        */