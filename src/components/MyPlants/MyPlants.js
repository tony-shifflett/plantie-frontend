import React, {useEffect, useState} from "react"
import MyPlantsDetails from './MyPlantsDetails'
import { Link } from 'react-router-dom'
import { BsFillPlusCircleFill } from "react-icons/bs"

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
              {store.getState().map((plant) => {
                //individual instance of state for each plant to handle visibility of details
                const [isVisible, setIsVisible] = useState(false);
                const clickHandler = () => {
                  setIsVisible(!isVisible);
                };

                return (
                  <div className="holdFoundPlants">
                    <article key={plant.id}>
                      <div className="holdFoundImg">
                        <img src={plant.img} />
                      </div>
                      <h1>{plant.nickname}</h1>
                      <h3 onClick={clickHandler}>{plant.type}</h3>
                      <MyPlantsDetails isVisible={isVisible} plant={plant} />
                    </article>
                  </div>
                );
              })}
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