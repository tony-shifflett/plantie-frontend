import React, {useEffect, useState} from "react"
import MyPlantsDetails from './MyPlantsDetails'
import {Link} from 'react-router-dom'

//store import
import store, {getPlants} from  '../store'
// Needs to be a link here to FindPlants Route '/FindPlants'


const MyPlants = (props)=>{
    

    const plants =()=>{

        
        return (
            <>
           <Link to='/FindPlants'> <div>+</div></Link>
            <div id='plant-info'>
                {store.getState().map((plant)=>{

                    //individual instance of state for each plant to handle visibility of details
                    const [isVisible, setIsVisible] = useState(false)
                    const clickHandler=()=>{
                        setIsVisible(!isVisible)
                    }
                    
                    return(
                        //inline styling for dev only -- remove before deploy 
                        <article key={plant.id} style={{border:'1px solid black',marginBottom:"50px"}} >
                            {/* inline style for dev only -- remove before deploy */}
                            <img  src={plant.img} style={{height: "40vh", width:"66vw"}}/>
                            <h1>{plant.nickname}</h1>
                            <h3 onClick={clickHandler}>{plant.type}</h3>
                            <MyPlantsDetails isVisible = {isVisible} plant={plant}/>
                        </article>
                    )
                })}
            </div>
            </>
        )
    }

    const noPlants =()=>{
        // store.dispatch(getPlants)
        //returns no plants screen while waiting for load
        return (
            <>
            <Link to='/FindPlants'> <div>+</div></Link>
            <h1>No Plants To Display</h1>
            </>
        )
    }
    // useEffect(()=>{store.dispatch(getPlants)},[])
    return store.getState().length > 0 ? plants() : noPlants ()


}
export default MyPlants