
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import React from './components/reactStudy';
import Angular from './components/angularStudy';
import Javascript from './components/javascriptStudy';

function App() {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Route exact path="/" component={Main}/>
        <Route exact path="/react" component={React}/>
        <Route exact path="/angular" component={Angular}/>
        <Route exact path="/javascript" component={Javascript}/>

      </div>
    </Router>

  );
}

export default App;
