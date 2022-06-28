import React from 'react'

export default function Input({type="text", name, className, placeholder, ...props}) {
  return (
    <input 
        type="text" 
        className={`form-control ${className}`} 
        name={name} 
        placeholder={placeholder}
        {...props} />
  )
}
