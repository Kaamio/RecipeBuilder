import React from 'react'
import StyledHeading2 from './elements/h2'
import styled  from 'styled-components'

const Search = styled.div`
padding: 1em;
width:90%;
font-size: 18px;
border-radius: 1em;
margin-bottom: 1em;
text-align: center; 
display: grid;
row-gap: 1px;
grid-template-columns: 100%;
`


const IngredientSearch = (props) => {

return (
    <Search>
        <div>        
        <StyledHeading2> Find ingredient </StyledHeading2>            
        
            <input value = {props.searchState} onChange = {props.handleSearch}
            />  
            
    </div>   
    </Search> 
    )
}

export default IngredientSearch

