import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { RootState } from "../reducers";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "../scss/index.scss";

// sets type for props
interface AppProps {}
export const App: FunctionComponent<AppProps> = props => {
  {
    const {} = props;

    return (
      //   <Router>
      <div></div>
      //   </Router>
    );
  }
};

export default connect(
  //if using selector
  (state: RootState) => ({}),
  {}
)(App);
