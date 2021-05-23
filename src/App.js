import React from 'react'
import './App.css';
import {Route, Link, Switch} from "react"

// font awesome imports 
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHome, faCalendar, faSpa, faUser} from '@fortawesome/free-solid-svg-icons';
import Profile from './components/UserProfile/Profile'
import FindPlants from './components/FindPlants/FindPlants'
import Splash from "./components/Splash/Splash"
import Footer from './components/Footer/Footer'

// library function to add icons
library.add(faHome, faCalendar, faSpa, faUser)

function App() {

  return (
    <div className="App">

      <Splash />
      <Profile/>
      <FindPlants/>
      <Footer/>
    </div>
  );
}

export default App;
