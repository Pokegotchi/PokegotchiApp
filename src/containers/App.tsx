import React, { FunctionComponent } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Landing_Header } from "../components/Landing_header";
import { Pokecard } from "./Pokecard";
import { PokemonSelection } from "./PokemonSelection";
import { PokeData } from "../components/PokeData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createSecureServer } from "http2";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import "../../assets/index.css";

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
let pokeInfo = [];
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
    .then(res => res.json())
    .then(data => {
      console.log(data);
      pokeInfo = data;
    })
    .catch(err =>
      console.log(`You have run into an error. Error Message: ${err}`)
    );
}

export const App: FunctionComponent<AppProps> = props => {
  {
    const {} = props;
    const { data, loading, error } = useQuery(GET_POKEMON_QUERY);
    if (loading) return <p>Loading...</p>;

    console.log(data);
    return (
      <Router>
        <div id="app">
          <Switch>
            <Route path="/login">
              <div className="loginContainer">
                <div className="login">
                  <Input className="userLogIn" placeholder="Username" />
                  <Input className="passwordLogIn" placeholder="Password" />
                  <div className="buttondiv">
                    <Link
                      to={
                        pokeInfo.length ? "/landing/verif" : "/select_pokemon"
                      }
                    >
                      <Button
                        className="LeftLogIn"
                        text="Log In"
                        onClick={logInUser}
                      />
                    </Link>
                    <Link to="/signup">
                      <Button className="MiddleLogIn" text="Welcome" />
                      <Button className="RightLogIn" text="Sign Up" />
                    </Link>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/signup">
              <div className="signupContainer">
                <div className="signup">
                  <Input className="userSignUp" placeholder="Username" />
                  <Input className="passwordSignUp" placeholder="Password" />
                  <div className="buttondiv">
                    <Link to="/login">
                      <Button
                        className="signUpButton"
                        text="Create Account"
                        onClick={createUser}
                      />
                    </Link>
                    <Button className="signUpButton" text="Create Account" />
                    <Button className="signUpButton" text="Create Account" />
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/landing/verif">
              <div>
                <Landing_Header />
                <Pokecard />
              </div>
            </Route>
            <Route path="/select_pokemon">
              <div className="PokemonSelectionContainer">
                <div className="SelectPokemon">
                  <PokemonSelection
                    className="randompokemon"
                    randImage={data}
                  />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
