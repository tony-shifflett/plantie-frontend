import React from 'react'
import './App.css';
import {Route, Link, Switch} from "react"
import FindPlants from './components/FindPlants/FindPlants'
import Splash from "./components/Splash/Splash"

function App() {

  return (
    <div className="App">
      <Splash />
      <FindPlants/>
    
    </div>
  );
}

export default App;
