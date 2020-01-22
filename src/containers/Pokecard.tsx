import React, { FunctionComponent } from 'react'
import {PokeImage} from "../components/PokeImage"
import {PokeData} from "../components/PokeData"

interface PokecardProps {
  className?: string
  PokemonName?: string
  PokemonURL?: string
}
export const Pokecard:
FunctionComponent<PokecardProps> = props => {
  {
    const {
      className, 
      PokemonName,
      PokemonURL
    } = props
  return (
    <div className={className}>
      <h1> { PokemonName } </h1>
        <PokeImage className= {className} PokemonURL={PokemonURL}/>
      <div>
        <PokeData/>
      </div>
    </div>
    ) 
  }
}