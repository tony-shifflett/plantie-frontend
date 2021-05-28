import React, {useEffect, useState} from "react"
import MyPlantsDetails from './MyPlantsDetails'
import {Link} from 'react-router-dom'

//store import
import store, {getPlants} from  '../../store'
// Needs to be a link here to FindPlants Route '/FindPlants'


const MyPlants = (props)=>{
    
    const plants =()=>{
            
        return (
            <>
                <Link to='/FindPlants'>
                    <div>+</div>
                </Link>
            <div id='plant-info'>
                {store.getState().map((plant)=>(
                    <article key={plant.id}  >
                        <img src={plant.img} />
                        <h1 onClick={()=>setIsVisible(!isVisible)}>{plant.name}</h1>
                        <p>{plant.type}</p>
                        <MyPlantsDetails plant={plant} isVisible={isVisible}/>
                    </article>
                ))}
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