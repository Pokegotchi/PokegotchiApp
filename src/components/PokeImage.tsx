import React, { FunctionComponent } from 'react'
interface PokeImageProps {
  className?: string
  PokemonURL?: string
  PokemonName?: string
  style?: any
  PokeFunction?: (...arg: any[]) => any

}
export const PokeImage:
FunctionComponent<PokeImageProps> = props => {
  {
    const {
      className,
      PokemonURL,
      PokemonName,
      PokeFunction,
      style,
    } = props
  return (
    <img className={className} src={PokemonURL} alt={PokemonName} onClick={PokeFunction} style={style}></img>
    ) 
  }
}