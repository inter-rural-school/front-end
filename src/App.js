import React from 'react';

import Dashboard from './Components/dashboard/dashboard.component'
import './App.css';
import Header from './Components/Header';
import Routes from './utils/Routes';

function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
