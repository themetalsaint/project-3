import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { onError } from 'apollo-link-error'
import Notifications, {notify} from 'react-notify-toast';
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "@apollo/client";

import reportWebVitals from './reportWebVitals';

//import css
import 'normalize.css';
import './animate.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'lightbox2/dist/css/lightbox.min.css'
//import js Lib
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper.min.js';
// import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';


const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => notify.show(message, 'error'))
})
const httpLink = createHttpLink({ uri: 'http://localhost:3000/graphql' });
const link = ApolloLink.from([
  errorLink,
  httpLink,
]);
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});




ReactDOM.render(
  <React.Fragment>
    <Notifications />
    <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
     
  </React.Fragment>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
