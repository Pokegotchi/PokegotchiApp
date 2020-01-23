import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./containers/App";
import rootReducer from "./reducers";
// import "../assets/index.css"

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://graphql-pokemon.now.sh/"
});
const client = new ApolloClient({
  cache,
  link
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
