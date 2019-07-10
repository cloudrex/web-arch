import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import "./styles/framework.css";
import App from "./components/app";
import * as serviceWorker from "./serviceWorker";
import ApolloClient, {gql} from "apollo-boost";
import {ApolloProvider} from "react-apollo";

export type Callback = (...args: any[]) => void;

// Create the Apollo GraphQL client.
const client = new ApolloClient({
    uri: "http://localhost:4000/"
});

ReactDOM.render((
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
