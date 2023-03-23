import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Dashboard/>
    </div>
  );
}

export default App;
