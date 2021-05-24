import React, {useState} from "react"
import MyPlantsDetails from './MyPlantsDetails'


const MyPlants = (props)=>{

    //destructure plant list from props
    const {myPlants} = props
    const [isVisible, setIsVisible] = useState(false)

    const plants =()=>{

        return (
            <div id='plant-info'>
                {myPlants.map((plant)=>(
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
        )
    }

    const noPlants =()=><h1>No Plants To Display</h1>

    return myPlants.length > 0 ? plants() : noPlants ()


}
export default MyPlants