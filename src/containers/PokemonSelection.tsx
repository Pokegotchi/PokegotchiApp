import React, { FunctionComponent } from "react";
import { PokeImage } from "../components/PokeImage";

interface PokeSelectionProps {
  className?: string;
  PokemonURL?: string;
  PokemonName?: string;
  PokeFunction?: (...arg: any[]) => any;
  style?: object;
  pushed?: any;
}
export const PokeSelection: FunctionComponent<PokeSelectionProps> = props => {
  {
    const { className, PokemonURL, PokemonName, PokeFunction, style } = props;

    let PokeImages: any[] = [];
    for (let i = 0; i < 3; i += 1) {
      PokeImages.push(
        <PokeImage
          className={className + i}
          PokemonURL={PokemonURL}
          style={style}
          PokemonName={PokemonName}
          PokeFunction={() => {
            document
              .getElementsByClassName(`${className}${i}`)[0]
              .setAttribute(
                "src",
                "https://img.pokemondb.net/artwork/pikachu.jpg"
              );
            document
              .getElementsByClassName(`${className}${(i + 1) % 3}`)[0]
              .setAttribute("style", "opacity: 0; height: 100px");
            document
              .getElementsByClassName(`${className}${(i + 2) % 3}`)[0]
              .setAttribute("style", "opacity: 0; height: 100px");
          }}
        />
      );
    }

    return (
      <div>
        <h2> Choose your Pokemon! </h2>
        {...PokeImages}
        <p>
          <strong>Please Choose Wisely...</strong>
        </p>
      </div>
    );
  }
};
