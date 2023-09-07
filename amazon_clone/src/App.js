import React, { Fragment } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './login';

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (
    // BEM

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='login' element={<h1>Login Page</h1>} />
          <Route path='/checkout' element={<><Header/><Checkout/></>} />
          <Route path='/' element={<><Header/><Home/></>} />
          <Route path='/orders' element={<h1>Here are your orders</h1>} />
          <Route path='/sign-in' element={<h1>Enter your passsword</h1>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
