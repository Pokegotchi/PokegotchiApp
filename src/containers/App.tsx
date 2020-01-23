import React, { FunctionComponent } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Landing_Header } from "../components/Landing_header";
import { Pokecard } from "./Pokecard";
import { PokeSelection } from "./PokemonSelection";
import { PokeData } from "../components/PokeData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createSecureServer } from "http2";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

// import "../scss/index.scss";

// sets type for props
interface AppProps {}

const originalPokemon = new Array(
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran",
  "Nidorina",
  "Nidoqueen",
  "Nidoran",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch'd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew"
);
const randomNum = Math.floor(Math.random() * 151);
const randomizedPoke = originalPokemon[randomNum];

const GET_POKEMON_QUERY = gql`
  {
    pokemon(name: "${randomizedPoke}") {
      name
      image
      evolutions {
        name
      }
      evolutionRequirements {
        amount
      }
    }
  }
`;

function createUser() {
  let user = (document.getElementsByClassName(
    "userSignUp"
  )[0] as HTMLInputElement).value;
  let pass = (document.getElementsByClassName(
    "passwordSignUp"
  )[0] as HTMLInputElement).value;
  let body = { user, pass };

  fetch("http://localhost:4000/signup/create_user", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch(err =>
      console.log(`You have run into an error. Error Message: ${err}`)
    );
}

function logInUser() {
  let user = (document.getElementsByClassName(
    "userLogIn"
  )[0] as HTMLInputElement).value;
  let pass = (document.getElementsByClassName(
    "passwordLogIn"
  )[0] as HTMLInputElement).value;
  let body = { user, pass };

  fetch("http://localhost:4000/login/sign_in", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify(body)
  })
    .then(res => console.log(res))
    .catch(err =>
      console.log(`You have run into an error. Error Message: ${err}`)
    );
}

export const App: FunctionComponent<AppProps> = props => {
  {
    const {} = props;
    const { data, loading, error } = useQuery(GET_POKEMON_QUERY);
    console.log(data);
    return (
      <Router>
        <div id="app">
          <Switch>
            <Route path="/login">
              <div>
                <Input className="userLogIn" placeholder="Username" />
                <Input className="passwordLogIn" placeholder="Password" />
                <Button
                  className="logInButton"
                  text="Log In"
                  onClick={logInUser}
                />
                <Button className="MiddleLogIn" text="Welcome" />
                <Button className="signUpButton" text="Sign Up" />
              </div>
            </Route>
            <Route path="/signup">
              <div>
                <Input className="userSignUp" placeholder="Username" />
                <Input className="passwordSignUp" placeholder="Password" />
                <Button
                  className="signUpButton"
                  text="Create Account"
                  onClick={createUser}
                />
                <Button className="signUpButton" text="Create Account" />
                <Button className="signUpButton" text="Create Account" />
              </div>
            </Route>
            <Route path="/landing/verif">
              <div>
                <Landing_Header />
                <Pokecard />
              </div>
            </Route>
            <Route path="/select_pokemon">
              <div>
                <PokeSelection />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
