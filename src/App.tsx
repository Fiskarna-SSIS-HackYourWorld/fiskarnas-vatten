import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
