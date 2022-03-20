import React, { useState } from 'react'
import IngredientService from '../services/ingredients'
import IngredientToAdd from './IngredientToAdd'
import FileUpload from './FileUpload'
import styled  from 'styled-components'

const Input = styled.input`
margin: 0.5em;  
`
const Ingredients= styled.div`
background: BurlyWood; 
`
const AvailableIngredients = ({ingredients, alertMessage, setAlertMessage, setIngredients}) => {
 

    const useField = (type) => {
        const [value, setValue] = useState('')
      
        const onChange = (event) => {
          setValue(event.target.value)
        }
      
        return {
          type,
          value,
          setValue,
          onChange
        }
      }    

      const namefield = useField('text')
      const costfield = useField('number')
      const complexityfield = useField('number')
      const picfield = useField('text')
      

    const handleDeleteIngredient = async(id) => {
      const response = await IngredientService.remove(id)
      
      if (response.status === 204) {
      IngredientService
        .getAll()
        .then(response => 
        setIngredients(response.data))
      } else {
        setAlertMessage(response.error)
        setTimeout(() => {
          setAlertMessage(null)
        }, 5000)

      }
    }
    const addIngredient = async (event) => {  

        event.preventDefault()
        
        const newIngredient = {
            name : namefield.value,
            cost : costfield.value,
            pic : picfield.value,
            complexity: complexityfield.value            
        }       
       
        const response = await IngredientService.create(newIngredient)              
        
        if (response.status !== 200) {
        setAlertMessage(response.error)
        setTimeout(() => {
          setAlertMessage(null)
        }, 5000)
      } else {
        namefield.setValue('') 
        costfield.setValue('')
        complexityfield.setValue('')
        picfield.setValue('')   

        IngredientService
        .getAll()
        .then(response => 
        setIngredients(response.data))
      }

    }


return (
  
    <div>            
        <h2>Ingredients</h2>
    <div>
    <form onSubmit = { addIngredient }>  
          Name:
          <Input {...namefield} />
          <br/>
          Cost:
          <Input {...costfield} />
          <br/>
          Complexity:
          <Input {...complexityfield} />
          <br/>        
          Link to ingredient picture
          <Input {...picfield} />
          <br/>
          <FileUpload />     
        <button>Add new</button>
      </form> 

    </div>
    <div>
      <Ingredients>
      <h2>Available ingredients</h2>
      {ingredients.map(ingredient=> 
      <IngredientToAdd ingredient = {ingredient}  handleDeleteIngredient = {handleDeleteIngredient} />)}
      </Ingredients> 
              </div>
              
        </div>   
)

}

export default AvailableIngredients

