import React from 'react'

export default function Button({type='submit', className, name, ...props}) {
  return (
        <button type={type} className={`btn ${className}`} {...props}>{name}</button>
  )
}
