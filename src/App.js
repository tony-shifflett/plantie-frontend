import React from 'react'
import './App.css';
import {Route, Link, Switch} from "react-router-dom"

// font awesome imports 
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHome, faCalendar, faSpa, faUser} from '@fortawesome/free-solid-svg-icons';




// components

import FindPlants from './components/FindPlants/FindPlants'
import Splash from "./components/Splash/Splash"
import Footer from './components/Footer/Footer'
import DailyTask from "./components/DailyTasks/DailyTasks"
import Profile from './components/Profile/Profile'

// library function to add icons
library.add(faHome, faCalendar, faSpa, faUser)

function App() {

  return (
    <div className="App">
      <Splash />


      <Calendar />
      <Profile/>


      <FindPlants />
      <DailyTask />

      <Footer/>
    </div>
  );
}

export default App;
