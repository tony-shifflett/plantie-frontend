import React, {useEffect} from 'react'
import './App.css';
import {Route, Link, Switch} from "react-router-dom"

//store import 
import store, {getPlants} from './store'

// font awesome imports 
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHome, faCalendar, faSpa, faUser} from '@fortawesome/free-solid-svg-icons';


// components
import Profile from './components/Profile/Profile'
import FindPlants from './components/FindPlants/FindPlants'
import Splash from "./components/Splash/Splash"
import Footer from './components/Footer/Footer'
import Calendar from './components/Calendar/Calendar'
import MyPlants from './components/MyPlants';
// import plantSeed from './plantSeed'
import DailyTask from "./components/DailyTasks/DailyTasks"


// library function to add icons
library.add(faHome, faCalendar, faSpa, faUser)

function App() {
  

  return (
    <div className="App">

      <Switch>
        <Route exact path='/' render={(rp) => <Splash {...rp} />} />
        <Route exact path='/MyPlants' render={(rp) => <MyPlants {...rp}/>} />
        <Route exact path='/DailyTask' render={(rp) => <DailyTask {...rp}  />} />
        <Route exact path='/Calendar' render={(rp) => <Calendar {...rp} />} />
        <Route exact path='/Profile' render={(rp) => <Profile {...rp} />}/>
        <Route exact path='/FindPlants' render={(rp) => <FindPlants {...rp} />} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
