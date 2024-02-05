import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The User is >>>', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, [dispatch]); // Added dependencies array

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<><Header/><Login/></>} />
          <Route path="/checkout" element={<><Header/><Checkout/></>} />
          <Route path="/" element={<><Header/><Home/></>} />
          <Route path="/orders" element={<h1>Here are your orders</h1>} />
          <Route path="/sign-in" element={<h1>Enter your password</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
