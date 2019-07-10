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
    uri: "https://48p1r2roz4.sse.codesandbox.io"
});

ReactDOM.render((
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
), document.getElementById("root"));

client.query({
    query: gql`
        {
            rates(currency: "USD") {
                currency
            }
        }
    `
}).then((result) => {
    console.log(result);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
