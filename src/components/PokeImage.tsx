import React, { FunctionComponent } from 'react'
interface PokeImageProps {
  className?: string
  PokemonURL?: string
  PokemonName?: string
  style?: any
  PokemonImageDisplay?: (...arg: any[]) => any

}
export const PokeImage:
FunctionComponent<PokeImageProps> = props => {
  {
    const {
      className,
      PokemonURL,
      PokemonName,
      PokemonImageDisplay,
      style,
    } = props
  return (
    <img className={className} src={PokemonURL} alt={PokemonName} onClick={PokemonImageDisplay} style={style}></img>
    ) 
  }
}