import React from 'react'


const MyPlants = (props)=>{

    //destructure plant list from props
    const {myPlants} = props


    const plants =()=>(
        <div id='plant-info'>
            {myPlants.map((plant)=>(
                //inline styling for dev only -- remove before deploy 
                <article key={plant.id} style={{border:'1px solid black',marginBottom:"50px"}} >
                    {/* inline style for dev only -- remove before deploy */}
                    <img src={plant.img} style={{height: "40vh", width:"66vw"}}/>
                    <section className='plant-care'>
                        <h1>{plant.name}</h1>
                        <h3>{plant.type}</h3>
                        <h3>{plant.frequency}</h3>
                        <h3>{plant.water}</h3>
                        <h3>{plant.sunlight}</h3>
                        <h3>{plant.temperature}</h3>
                    </section>   
                    <hr/>
                    <section>
                        <h2>Description</h2>
                        <p>{plant.info}</p>
                    </section>
                </article>
            ))}
        </div>
    )

    const noPlants =()=><h1>No Plants To Display</h1>

    return myPlants.length > 0 ? plants() : noPlants ()
}

export default MyPlants