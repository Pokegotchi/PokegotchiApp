import React, { FunctionComponent } from 'react'
interface InputProps {
  className?: string
  text?: string
  value?: number
  placeholder?: string
}
export const Input:
FunctionComponent<InputProps> = props => {
  {
    const {
      className, 
      text,
      value,
      placeholder,
    } = props
  return (
    <input className={className} value={value} placeholder ={placeholder}>{text}</input>
    ) 
  }
}