import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'




const IngredientSearch = (props) => {




return (
    <div>
        <div>        
        <p>
            Find ingredients
            <input value = {props.searchState} onChange = {props.handleSearch}
            /> 
        </p>
        
    </div>   
    </div> 
    )
}

export default IngredientSearch

