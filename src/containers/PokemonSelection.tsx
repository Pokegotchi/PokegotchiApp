import React, { FunctionComponent } from 'react'
import { PokeImage } from "../components/PokeImage"

interface PokeSelectionProps {
  className?: string
}
export const PokeSelection:
FunctionComponent<PokeSelectionProps> = props => {
  {
    const {
      className,
    } = props

    let displayStyle = {display: "none" ? "block" : "none"}
  return (
    <div className={className}>
      <h2> Choose your Pokemon! </h2>
      <PokeImage style={displayStyle}/>
      <PokeImage style={displayStyle}/>
      <PokeImage style={displayStyle}/>
    </div>
    ) 
  }
}