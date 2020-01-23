import React, { FunctionComponent } from "react";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Landing_Header } from "../components/Landing_header"
import { Pokecard } from "./Pokecard" 
import { PokeSelection } from "./PokemonSelection"
import { PokeData } from "../components/PokeData"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createSecureServer } from "http2";

// import "../scss/index.scss";

// sets type for props
interface AppProps {}

function createUser () {
  let user = (document.getElementsByClassName("userSignUp")[0] as HTMLInputElement).value
  let pass = (document.getElementsByClassName("passwordSignUp")[0] as HTMLInputElement).value
  let body = {user, pass}

  fetch("http://localhost:4000/signup/create_user", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify(body)
  })
  .then((res) => res.json())
  .catch((err) => console.log(`You have run into an error. Error Message: ${err}`))
}


function logInUser () {
  let user = (document.getElementsByClassName("userLogIn")[0] as HTMLInputElement).value
  let pass = (document.getElementsByClassName("passwordLogIn")[0] as HTMLInputElement).value
  let body = {user, pass}

  fetch("http://localhost:4000/login/sign_in", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify(body)
  })
  .then((res) => res.json())
  .catch((err) => console.log(`You have run into an error. Error Message: ${err}`))
}

export const App: FunctionComponent<AppProps> = props => {
  {
    const {} = props;

    return (
      <div id="app">
        <Router>
          <Switch> 
            <Route path="/login">
              <div>
                <Input className="userLogIn" placeholder="Username"/>
                <Input className="passwordLogIn" placeholder="Password"/>
                <Button className= "logInButton" text='Log In' onClick={logInUser}/>
                <Button className= "MiddleLogIn" text='Welcome'/>
                <Button className="signUpButton" text='Sign Up'/>
              </div>
            </Route>
            <Route path="/signup">
              <div>
                <Input className="userSignUp" placeholder="Username"/>
                <Input className="passwordSignUp" placeholder="Password"/>
                <Button className="signUpButton" text="Create Account" onClick={createUser}/>
                <Button className="signUpButton" text="Create Account"/>
                <Button className="signUpButton" text="Create Account"/>
              </div>
            </Route>
            <Route path="/landing/verif">
              <div>
                <Landing_Header/>
                <Pokecard/>
              </div>
            </Route>
            <Route path="/select_pokemon">
              <div>
                <PokeSelection/>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
};

export default App;