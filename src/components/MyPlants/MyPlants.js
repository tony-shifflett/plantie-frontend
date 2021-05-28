import React, {useEffect, useState} from "react"
import MyPlantsDetails from './MyPlantsDetails'
import { Link } from 'react-router-dom'
import { BsFillPlusCircleFill } from "react-icons/bs"
import Plant from './Plant'

//store import
import store, {getPlants} from  '../../store'
// Needs to be a link here to FindPlants Route '/FindPlants'

import './myplants.scss'


const MyPlants = (props)=>{
    

    const plants =()=>{
            

        return (
          <>
            <Link to="/FindPlants">
              <h1>My Plants</h1>
              <div className="containAddIcon">
                <BsFillPlusCircleFill className="addPlantIcon" size="55" />
              </div>
            </Link>
            <div id="plant-info">
              {store.getState().map((plant) =><Plant plant={plant}/>)}
            </div>
          </>
        );
    }

    const noPlants =()=>{
        // store.dispatch(getPlants)
        //returns no plants screen while waiting for load
        return (
          <>
            <h1>No Plants To Display</h1>
            <Link to="/FindPlants">
              <div className="containAddIcon">
                <BsFillPlusCircleFill className="addPlantIcon" size="55" />
              </div>
            </Link>
          </>
        );
    }
    // useEffect(()=>{store.dispatch(getPlants)},[])
    return store.getState().length > 0 ? plants() : noPlants ()


}
export default MyPlants