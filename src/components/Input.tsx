import React, { FunctionComponent } from 'react'
interface InputProps {
  className?: string
  value?: string
  placeholder?: string
}
export const Input:
FunctionComponent<InputProps> = props => {
  {
    const {
      className, 
      value,
      placeholder,
    } = props
  return (
    <input className={className} value={value} placeholder ={placeholder}></input>
    ) 
  }
}