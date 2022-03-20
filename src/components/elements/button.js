import React from 'react'
import styled  from 'styled-components'


const StyledButton = styled.button`
background-color: #008CBA;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 20px;
grid-column-start: 1;
grid-column-end: 4;
&:hover {
    color:blue;
    cursor:pointer;
}
`

const Button = (props) => {
    return (   
    <StyledButton onClick = {() => props.action(props.target)}> {props.text} </StyledButton>
    )
}


export default Button