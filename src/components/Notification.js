import React from 'react'

const Alert = ({message}) => {
    
    if (message === null) {
        return null
      }
    
    return (
        <div className = 'message'>
        <h1>{message}</h1>
        </div>
    )
}

export default Alert 