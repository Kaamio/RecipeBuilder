import React, { useState } from 'react'
import styled  from 'styled-components'


const Input = styled.input`
margin: 0.5em;  
`

const FileUpload = () => {

    return(
        <Input type='file' />
    )
}

export default FileUpload