import React, { FunctionComponent } from "react";
import { PokeImage } from "../components/PokeImage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface PokeSelectionProps {
  className?: string;
  PokemonURL?: string;
  PokemonName?: string;
  PokeFunction?: (...arg: any[]) => any;
  style?: object;
  pushed?: any;
  randImage?: any;
}

export const PokemonSelection: FunctionComponent<PokeSelectionProps> = props => {
  {
    const {
      className,
      PokemonURL,
      PokemonName,
      PokeFunction,
      style,
      randImage
    } = props;
    console.log("randImage", randImage);

    //send graphQL data to server
    fetch("http://localhost:4000/select_pokemon/select", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(randImage)
    });

    /////

    let PokeImages: any[] = [];

    for (let i = 0; i < 3; i += 1) {
      PokeImages.push(
        <PokeImage
          className={className + i}
          PokemonURL={"../../assets/Poke_Question_Mark.jpg"}
          style={{ height: "75px" }}
          PokemonName={PokemonName}
          PokeFunction={() => {
            document
              .getElementsByClassName(`${className}${i}`)[0]
              .setAttribute("src", `${randImage.pokemon.image}`);
            document
              .getElementsByClassName(`${className}${(i + 1) % 3}`)[0]
              .setAttribute("style", "opacity: 0; height: 75px");
            document
              .getElementsByClassName(`${className}${(i + 2) % 3}`)[0]
              .setAttribute("style", "opacity: 0; height: 75px");
          }}
        />
      );
    }

    return (
      <div>
        <h3> Choose your Pokemon! </h3>
        {...PokeImages}
        <p>
          <strong>Please Choose Wisely...</strong>
        </p>
      </div>
    );
  }
};
