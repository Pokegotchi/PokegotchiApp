import React, { FunctionComponent } from "react";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Landing_Header } from "../components/Landing_header"
import { Pokecard } from "./Pokecard" 
import { PokeSelection } from "./PokemonSelection"
import { PokeData } from "../components/PokeData"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import "../scss/index.scss";

// sets type for props
interface AppProps {}

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
                <Button className= "logInButton" text='Log In'/>
                <Button className= "MiddleLogIn" text='Welcome'/>
                <Button className="signUpButton" text='Sign Up'/>
              </div>
            </Route>
            <Route path="/signup">
              <div>
                <Input className="userSignIn" placeholder="Username"/>
                <Input className="passwordSignIn" placeholder="Password"/>
                <Button className="signUpButton" text="Create Account"/>
                <Button className="signUpButton" text="Create Account"/>
                <Button className="signUpButton" text="Create Account"/>
              </div>
            </Route>
            <Route path="/landing">
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