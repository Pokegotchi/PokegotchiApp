import React, { FunctionComponent } from 'react'
interface ButtonProps {
  className?: string
  onClick?: (...arg: any[]) => any
  text?: string
  value?: number
  icon?: string
}
export const Button:
FunctionComponent<ButtonProps> = props => {
  {
    const {
      className, 
      onClick,
      text,
      value, 
      icon
    } = props
  return (
    <button className={className} onClick={onClick} value={value}>{text}</button>
    ) 
  }
}