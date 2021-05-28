import React from 'react'
import {BsFillDashCircleFill} from 'react-icons/bs'
import store, {removePlant} from "../../store"


const MyPlantsDetails = React.memo((props) => {

    
const deleteHandler = ()=>{
    store.dispatch(removePlant(props.plant))
    //workaround to rerender MyPlants
    props.history.push('/calendar')
    props.history.goBack()
}

    if (props.isVisible){
        return (
            <div>
                <section className='plant-care'>
                    <h3>{props.plant.frequency}</h3>
                    <h3>{props.plant.water}</h3>
                    <h3>{props.plant.sunlight}</h3>
                    <h3>{props.plant.temperature}</h3>
                </section>   
                <hr/>
                <section>
                    <h2>Description</h2>
                    <p>{props.plant.info}</p>
                </section>
                <div className="containAddIcon">
                <BsFillDashCircleFill className="addPlantIcon" size="55" onClick={deleteHandler}/>
              </div>
            </div>
        )

    }
    else{
        return <div></div>
    }


 })
export default MyPlantsDetails