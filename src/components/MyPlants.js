import React, {useState} from "react"
import MyPlantsDetails from './MyPlantsDetails'
import {Link} from 'react-router-dom'

//store import
import store from  '../store'
// Needs to be a link here to FindPlants Route '/FindPlants'


const MyPlants = (props)=>{
    

    //destructure plant list from props
    //commented out to test store
    // const {myPlants} = props
    const [isVisible, setIsVisible] = useState(false)

    const plants =()=>{
        
        return (
            <>
           <Link to='/FindPlants'> <div>+</div></Link>
            <div id='plant-info'>
                {store.getState().map((plant)=>(
                    //inline styling for dev only -- remove before deploy 
                    <article key={plant.id} style={{border:'1px solid black',marginBottom:"50px"}} >
                        {/* inline style for dev only -- remove before deploy */}
                        <img src={plant.img} style={{height: "40vh", width:"66vw"}}/>
                        <h1 onClick={()=>setIsVisible(!isVisible)}>{plant.name}</h1>
                        <h3>{plant.type}</h3>
                        <MyPlantsDetails plant={plant} isVisible={isVisible}/>
                    </article>
                ))}
            </div>
            </>
        )
    }

    const noPlants =()=><h1>No Plants To Display</h1>

    return store.getState().length > 0 ? plants() : noPlants ()


}
export default MyPlants