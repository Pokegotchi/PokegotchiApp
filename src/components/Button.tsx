import React, { FunctionComponent } from 'react'
interface ButtonProps {
  className?: string
  onClick?: (...arg: any[]) => any
  text?: string
  value?: number
}
export const Button:
FunctionComponent<ButtonProps> = props => {
  {
    const {
      className, 
      onClick,
      text,
      value, 
    } = props
  return (
    <button className={className} onClick={onClick} value={value}>{text}</button>
    ) 
  }
}