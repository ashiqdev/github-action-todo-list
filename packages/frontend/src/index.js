import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";

import client from "./config/client";

import TodoApp from "./components/TodoApp";

import "./index.css";

function Container() {
  return (
    <ApolloProvider client={client}>
      <TodoApp />
    </ApolloProvider>
  );
}

ReactDOM.render(<Container />, document.getElementById("app"));
