import React, { FunctionComponent } from 'react'
interface PokeDataProps {
  className?: string
  PokemonData?: string
}
export const PokeData:
FunctionComponent<PokeDataProps> = props => {
  {
    const {
      className,
      PokemonData
    } = props
  return (
    <div className={className}>
      <p> D3 Data graph goes here ... </p>
    </div>
    ) 
  }
}