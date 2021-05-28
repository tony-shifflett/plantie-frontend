import React from 'react'


const MyPlantsDetails = (props) =>{

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
            </div>
        )

    }
    else{
        return <div></div>
    }


}
export default MyPlantsDetails