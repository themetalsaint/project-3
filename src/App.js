
import React from "react";
import Study from "./components/reactStudy"
import Navbar from "./components/navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    
    <Router>
      <Navbar/>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/study">Study</Link>
            </li>

          </ul>
        </nav>


        <Switch>
          <Route path="/study">
          <Study/>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Study() {
  return ({Study})


}

