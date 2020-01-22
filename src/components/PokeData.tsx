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
      <p> D3 Data graph goes here maybe... </p>
      <div>
        <p>
        This is the Evolution Requirement: {EvolveReq}
        <br/>
        This is the Current Feed Count: {FeedCount}
        </p>
      </div>
    </div>
    ) 
  }
}