import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import React from 'react'
import axios from 'axios'

const Recipe = () => {


const options = [
    'one', 'two', 'three'
    ];
    
const defaultOption = options[0];

return (
    <div>
        <Dropdown options={options} onChange={console.log('aa')} value={defaultOption} placeholder="Select an option" />;
    </div>
    )
}

export default Recipe