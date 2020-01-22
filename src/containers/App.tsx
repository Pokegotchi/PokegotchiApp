import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Landing_Header } from "../components/Landing_header"
import { Pokecard } from "../containers/Pokecard" 
import { PokeSelection } from "../containers/PokemonSelection"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "../scss/index.scss";

// sets type for props
interface AppProps {}
export const App: FunctionComponent<AppProps> = props => {
  {
    const {} = props;

    return (
      //   <Router>
        <div id="app">
          <h1>POKEGOTCHI APP!!</h1>
          <Button className = "LeftButton" text ="Left Button"></Button>
          <Button className = "MiddleButton" text = "Middle Button"></Button>
          <Button className = "RightButton" text= "Right Button"></Button>
          <div>
            <p></p>
            <Input className = "Username" placeholder = "Username"></Input>
            <Input className = "Password" placeholder = "Password"></Input>
          </div>
          <div>
            <p></p>
            <Landing_Header username = "Kenny"></Landing_Header>
          </div>
          <div>
            <p></p>
            <Pokecard PokemonName="Pikachu" />
          </div>
          <div>
            <br/>
            <PokeSelection/>
          </div>
        </div>

      //   </Router>
      
    );
  }
};

export default connect(
  //if using selector
  (state: RootState) => ({}),
  {}
)(App);
