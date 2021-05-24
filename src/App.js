import React from 'react'
import './App.css';
import {Route, Link, Switch} from "react-router-dom"

// font awesome imports 
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHome, faCalendar, faSpa, faUser} from '@fortawesome/free-solid-svg-icons';
// import Profile from './components/UserProfile/Profile'
import FindPlants from './components/FindPlants/FindPlants'
import Splash from "./components/Splash/Splash"
import Footer from './components/Footer/Footer'
import Calendar from './components/Calendar/Calendar'
import MyPlants from './components/MyPlants';
import plantSeed from './plantSeed'

// library function to add icons
library.add(faHome, faCalendar, faSpa, faUser)

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(rp) => <Splash {...rp} />} />
        <Route exact path='/MyPlants' render={(rp) => <MyPlants {...rp} myPlants={plantSeed}/>} />
        <Route exact path='/Calendar' render={(rp) => <Calendar {...rp} />} />
        {/* <Profile/> */}
        <Route exact path='/FindPlants' render={(rp) => <FindPlants {...rp} />} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
