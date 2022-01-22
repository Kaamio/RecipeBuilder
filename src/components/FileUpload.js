import React, { useState } from 'react'
import styled  from 'styled-components'

const FileUpload = () => {

const Input = styled.input`
margin: 0.5em;  
`

    return(
        <Input type='file' />
    )
}

export default FileUpload