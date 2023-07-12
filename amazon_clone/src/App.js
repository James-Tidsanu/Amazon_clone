import React, { Fragment } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    // BEM
    // <BrowserRouter>
    //   <div className="App">
    //     <Routes>
    //     <Route path="/hello" element={<h1>hello</h1>} />
    //       </Routes>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/checkout' element={<Header />}>
          </Route>
        </Routes>
        <Routes>
          <Route path='/' element={<Home><Header /></Home>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
