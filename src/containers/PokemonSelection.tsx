import React, { FunctionComponent } from 'react'
import { PokeImage } from "../components/PokeImage"

interface PokeSelectionProps {
  className?: string
  PokemonURL?: string
  PokemonName?: string
  PokeFunction?: (...arg: any[]) => any
  style?: object

}
export const PokeSelection:
FunctionComponent<PokeSelectionProps> = props => {
  {
    const {
      className,
      PokemonURL,
      PokemonName,
      PokeFunction,
      style
    } = props

let PokeImages:any[] = []
for (let i = 0; i < 3; i +=1) {
  PokeImages.push(<PokeImage className={className} PokemonURL={PokemonURL} style={style} PokemonName={PokemonName} PokeFunction={PokeFunction}/>)
}

  return (
    <div>
      <h2> Choose your Pokemon! </h2>
      {...PokeImages}
      <p>
        <strong>
          Please Choose Wisely...
        </strong>
      </p>
    </div>
    ) 
  }
}