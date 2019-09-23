import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import { Login } from './Components/Login';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
