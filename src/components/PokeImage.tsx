import React, { FunctionComponent } from 'react'
interface PokeImageProps {
  className?: string
  PokemonURL?: string
  PokemonName?: string
  style?: any
  onClick?: (...arg: any[]) => any
  PokeFunction?: (...arg: any[]) => any
  src?: string
  alt?: string

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