import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login';
import Home from './Pages/home.page'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Home } />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
