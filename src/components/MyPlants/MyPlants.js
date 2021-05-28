import React, {useEffect, useState} from "react"
import MyPlantsDetails from './MyPlantsDetails'
import { Link } from 'react-router-dom'
import { BsFillPlusCircleFill, BsPencil } from "react-icons/bs"

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
                //state for the form
                const [formData, setFormData] = useState(plant.nickname)

                const handleChange = (event)=>{
                  setFormData(...formData, event.target.value)
                }


                //individual instance of state for each plant to handle visibility of details
                const [isVisible, setIsVisible] = useState(false);
                const clickHandler = () => {
                  setIsVisible(!isVisible);
                };

                const [formDisplay, updateFormDisplay] = useState(true)

                const pencilClickHandler = ()=>{
                  updateFormDisplay(!formDisplay)
                  // console.log(formDisplay)
                }


                const handleSubmit = (e) => {
                  e.preventDefault();
                  plant.nickname = formData
                  updateFormDisplay(!formDisplay)

                }
           

                return (
                  <div className="holdFoundPlants">
                    <article key={plant.id}>
                      <div className="holdFoundImg">
                        <img src={plant.img} alt={`image of ${plant.type}`} />
                      </div>


                      {formDisplay?<h1>{formData}</h1>
                      
                      :<form onSubmit={handleSubmit}>
                          <input  
                            type="text"
                            placeholder="Plant Nickname"
                            name = "name"
                            value={formData}
                            onChange={handleChange}
                         />
                         <input type='submit'/>
                       </form>}


                      <BsPencil size='10' onClick={pencilClickHandler}/>


                      <h3 onClick={clickHandler}>{plant.type}</h3>
                      <MyPlantsDetails history={props.history} isVisible={isVisible} plant={plant}/>


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