import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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


//import components
import Navbar from './components/navbar.jsx';
import Main from './components/Main.jsx';
import Calm from './components/calm.jsx';
import Study from './components/reactStudy';
import Angular from './components/angularStudy';



ReactDOM.render(
  <React.Fragment>
      <Navbar />
      <Study />
      <Angular />
      {/* <Main /> */}
      {/* <Calm/> */}
     
  </React.Fragment>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
