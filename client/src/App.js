import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Agenda from './pages/Agenda';
import AllNotes from './components/notes/AllNotes'
import NewNote from './components/notes/NewNote'
import EditNote from './components/notes/EditNote'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/agenda">
              <Agenda />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/me">
              <Profile />
            </Route>
            <Route exact path="/profiles/:username">
              <Profile />
            </Route>
            <Route exact path="/thoughts/:thoughtId">
              <SingleThought />
            </Route>
          </div>
          <Footer />
          <div>
          <nav className="navbar App-header" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                Interview Notes
              </Link>
            </div>
<div className="navbar-end">
              <Link to="/" className="navbar-item">
                All Notes
              </Link>
<Link to="/newnote" className="navbar-item">
                New Note
              </Link>
            </div>
          </nav>
<Route exact path="/" component={AllNotes}/>
          <Route path="/newnote" component={NewNote}/>
          <Route path="/note/:id" component={EditNote}/>
        </div>
        </div>
      </Router>
        </ApolloProvider>
  );
}

export default App;
