import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'




const IngredientSearch = (props) => {


return (
    <div>
        <div>        
        <h2>
            Find ingredients
        </h2>
            <input value = {props.searchState} onChange = {props.handleSearch}
            /> 
        
        
    </div>   
    </div> 
    )
}

export default IngredientSearch

