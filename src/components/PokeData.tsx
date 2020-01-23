import React, { FunctionComponent } from 'react'
interface PokeDataProps {
  className?: string
  PokemonData?: string
  EvolveReq?: number
  FeedCount?: number
}
export const PokeData:
FunctionComponent<PokeDataProps> = props => {
  {
    const {
      className,
      PokemonData,
      EvolveReq,
      FeedCount
    } = props
  return (
    <div className={className}>
        <p>
        This is the Evolution Requirement: {EvolveReq}
        <br/>
        This is the Current Feed Count: {FeedCount}
        </p>
    </div>
    ) 
  }
}