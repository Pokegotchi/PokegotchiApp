import React, { FunctionComponent } from 'react'
import {PokeImage} from "../components/PokeImage"
import {PokeData} from "../components/PokeData"

interface PokecardProps {
  className?: string
  PokemonName?: string
  PokemonURL?: string
  EvolveReq?: number
  FeedCount?: number
}
export const Pokecard:
FunctionComponent<PokecardProps> = props => {
  {
    const {
      className, 
      PokemonName,
      PokemonURL,
      EvolveReq,
      FeedCount
    } = props
  return (
    <div className={className}>
      <h1> { PokemonName } </h1>
        <PokeImage className= {className} PokemonURL={PokemonURL} />
      <div>
        <PokeData EvolveReq={EvolveReq} FeedCount={FeedCount}/>
      </div>
    </div>
    ) 
  }
}